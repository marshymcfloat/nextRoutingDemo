import { MongoClient } from "mongodb";

import MeetupList from "../components/meetups/MeetupList";

export default function Homepage(props) {
  return <MeetupList meetups={props.meetups} />;
}

/* export async function getServerSideProps(context) {
  const { req, res } = context;

  return {
    props: {
      meetups: dummyMeetUps,
    },
  };
} */

export async function getStaticProps() {
  const client = await MongoClient.connect(
    "mongodb+srv://canoydaniel06:SVeYxWhHQu6bxFF6@cluster0.tqgcw.mongodb.net/meetups?retryWrites=true&w=majority&appName=Cluster0"
  );

  const db = client.db();
  const meetupCollection = db.collection("meetups");

  const meetups = await meetupCollection.find().toArray();

  client.close();

  return {
    props: {
      meetups: meetups.map((meetup) => ({
        title: meetup.title,
        address: meetup.address,
        image: meetup.image,
        id: meetup._id.toString(),
      })),
    },
    revalidate: 1,
  };
}
