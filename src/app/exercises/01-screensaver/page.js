import React from 'react';
import Link from 'next/link';

function ScreenSaverExercise() {
  return (
    <main className="screen-saver-wrapper">
      <p>Choose Your Color:</p>
      <ul>
        <li><Link href="01-screensaver/red">Red</Link></li>
        <li><Link href="01-screensaver/white">White</Link></li>
        <li><Link href="01-screensaver/blue">Blue</Link></li>
      </ul>
    </main>
  );
}

export default ScreenSaverExercise;
