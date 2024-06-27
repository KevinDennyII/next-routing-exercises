import React from 'react';
import Link from 'next/link';
import ScreenSaver from '../../../components/ScreenSaver';

function ScreenSaverExercise() {
  return (
    <main className="screen-saver-wrapper">
      Choose Your Color:
      <li><Link href="01-screensaver/red">Red</Link></li>
      <li><Link href="01-screensaver/white">White</Link></li>
      <li><Link href="01-screensaver/blue">Blue</Link></li>
    </main>
  );
}

export default ScreenSaverExercise;
