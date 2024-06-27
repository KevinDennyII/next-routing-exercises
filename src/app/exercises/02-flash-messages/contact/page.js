'use client';
import React from 'react';
import { useRouter } from 'next/navigation';

function ContactPage() {
  const router = useRouter();

  function handleSubmit(event){
    event.preventDefault();
    router.push("/exercises/02-flash-messages")
  }

  return (
    <main>
      <form>
        <label htmlFor="name">Name:</label>
        <input id="name" required={true} />

        <label htmlFor="message">Message:</label>
        <textarea id="message" />

        <button onClick={handleSubmit}>Submit</button>
      </form>
    </main>
  );
}

export default ContactPage;
