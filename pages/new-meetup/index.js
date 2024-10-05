import { useRouter } from "next/router";
import NewMeetupForm from "../../components/meetups/NewMeetupForm";
import Head from "next/head";

export default function NewMeetup() {
  const router = useRouter();

  async function newMeetUpHandler(newMeetupData) {
    const response = await fetch("/api/new-meetup", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(newMeetupData),
    });

    if (!response.ok) {
      throw new Error("There is an error while creating new meetup.");
    }

    const resData = await response.json();

    router.push("/");
  }

  return (
    <>
      <Head>
        <title>Create new Meetup</title>
        <meta name="description" content="post new amazing meetup" />
      </Head>
      <NewMeetupForm onAddMeetup={newMeetUpHandler} />;
    </>
  );
}
