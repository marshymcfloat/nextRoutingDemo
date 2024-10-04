import Image from "next/image";

import MeetupDetail from "../../components/meetups/MeetupDetail";

export default function MeetupDetails(props) {
  return (
    <>
      <MeetupDetail
        image={
          "https://upload.wikimedia.org/wikipedia/commons/6/67/London_Skyline_%28125508655%29.jpeg"
        }
        title="The First meetup"
        address="philippines, palawan"
        description="this is the first meetup i created"
      />
    </>
  );
}

export async function getStaticPaths() {
  return {
    fallback: false,
    paths: [
      {
        params: {
          meetupid: "m1",
        },
      },
      {
        params: {
          meetupid: "m2",
        },
      },
    ],
  };
}

export async function getStaticProps(context) {
  const { params } = context;

  return {
    props: {
      meetUpData: {
        image:
          "https://upload.wikimedia.org/wikipedia/commons/6/67/London_Skyline_%28125508655%29.jpeg",
        id: params.meetupid,
        title: "The first meetup",
        address: "Philippine, Palawan",
        description: "This is the details for the first meet up",
      },
    },
  };
}
