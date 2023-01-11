import { SyntheticEvent, useState, memo } from 'react';
import { StyledFooter } from './Footer.styled';

const Footer = memo(() => {
  const [isFeedbackFormVisible, setFeedbackFormVisible] = useState(false);
  const [formData, setFormData] = useState({
    title: '',
    topic: '',
    message: '',
  })
  
  const handleSubmit = (e: SyntheticEvent) => {
    e.preventDefault();
  
    console.log(formData);
  }

  const handleChange = (e: SyntheticEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const value = e.currentTarget.value;
    const name = e.currentTarget.name;

    setFormData((prevState) => ({
      ...prevState,
      [name]: value, 
    }));
  }
  
  return <StyledFooter padding={20}>
    <button onClick={() => {
      setFeedbackFormVisible((prev) => !prev);
    }}>Give me a feedback?</button>
    {
      isFeedbackFormVisible && (
        <form onSubmit={handleSubmit}>
          <input name="title" value={formData.title} onChange={handleChange}/>
          <input name="topic" value={formData.topic} onChange={handleChange}/>
          <textarea name="message" value={formData.message} onChange={handleChange}/>
          <button type='submit'>Send</button>
        </form>
      )
    }
  </StyledFooter>
});

Footer.displayName = 'MemoFooter';

export default Footer;