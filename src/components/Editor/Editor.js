import React from 'react';

import './Editor.css';

export default function Editor({
  title,
  setTitle,
  subtitle,
  setSubtitle,
  text,
  setText,
  font,
  setFont,
  align,
  setAlign,
}) {
  const handleChange = (event) => {
    // console.log('event.target.value', event.target.value);
    event.target.name === 'title' && setTitle(event.target.value);
    event.target.name === 'subtitle' && setSubtitle(event.target.value);
    event.target.name === 'text' && setText(event.target.value);
    event.target.name === 'font' && setFont(event.target.value);
    event.target.name === 'align' && setAlign(event.target.value);
  };

  return (
    <div className="editor">
      <div className="form-control">
        <input name="title" type="text" value={title} onChange={handleChange} />
        <label htmlFor="title">Title</label>
      </div>
      <div className="form-control">
        <input name="subtitle" type="text" value={subtitle} onChange={handleChange} />
        <label>Subtitle</label>
      </div>
      <div className="form-control">
        <select name="font" value={font} onChange={handleChange}>
          <option value="architect">{"Architect's Daughter"}</option>
          <option value="comforter">Comforter</option>
          <option value="fredoka">Fredoka</option>
          <option value="indie-flower">Indie Flower</option>
          <option value="monteserrat">Monteserrat</option>
          <option value="roboto">Roboto</option>
          <option value="roboto-mono">Roboto Mono</option>
          <option value="titillium">Titillium</option>
        </select>
        <label>Font</label>
      </div>
      <div className="form-control">
        <label>Alignment</label>
        <div value={align} className="radio-group">
          <label>
            <input name="align" type="radio" value="left" onChange={handleChange} />
            <i className="ri-align-left"></i>
          </label>
          <label>
            <input name="align" type="radio" value="center" onChange={handleChange} />
            <i className="ri-align-center"></i>
          </label>
          <label>
            <input name="align" type="radio" value="right" onChange={handleChange} />
            <i className="ri-align-right"></i>
          </label>
        </div>
      </div>
      <div className="form-control">
        <textarea name="text" value={text} style={{ height: '250px' }} onChange={handleChange} />
        <label>Text</label>
      </div>
    </div>
  );
}
