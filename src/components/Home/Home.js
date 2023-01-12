import { useState } from 'react';

import Preview from '../Preview/Preview';
import Editor from '../Editor/Editor';

import './Home.css';

export default function Home() {
  // add useState calls here for title, subtitle, font, align, and text
  const [title, setTitle] = useState('Insert Title');
  const [subtitle, setSubtitle] = useState('Insert Subtitle');
  const [text, setText] = useState('Insert Text');
  const [font, setFont] = useState('');
  const [align, setAlign] = useState('');

  return (
    <main>
      {/* pass the state variables as props to the presentational components */}
      <Preview title={title} subtitle={subtitle} text={text} font={font} align={align} />
      <Editor
        title={title}
        setTitle={setTitle}
        subtitle={subtitle}
        setSubtitle={setSubtitle}
        text={text}
        setText={setText}
        font={font}
        setFont={setFont}
        align={align}
        setAlign={setAlign}
      />
    </main>
  );
}
