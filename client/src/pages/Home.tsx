import { useEffect, useState } from 'react'
import Markdown from 'react-markdown'
import rehypeRaw from "rehype-raw";

interface HomeData {
  title: string;
  content: string;
}

interface ContactData {
  id: number;
  title: string;
  content: string;
}

function Home() {
  const [homeData, setHomeData] = useState<HomeData>({ title: '', content: '' });
  const [contactData, setContactData] = useState<ContactData[]>([]);
  const [error, setError] = useState(null);

  const fetchData = async () => {
    try {
      const [homeRes, contactRes] = await Promise.all([
        fetch('http://localhost:4040/api/home/1'),
        fetch('http://localhost:4040/api/contact'),
      ]);

      if (!homeRes.ok || !contactRes.ok) {
        throw new Error('Data download error');
      }

      const [homeJson, contactJson] = await Promise.all([
        homeRes.json(),
        contactRes.json(),
      ]);

      setHomeData(homeJson);
      setContactData(contactJson);
    } catch (err) {
      console.error(err);
      setError(err.message);
    }
  };


  useEffect(() => {
    fetchData()
  }, [])

  if (error) {
    return <p>An error occurred: {error}</p>;
  }
  
  
  return (
    <>
      <h2 style={{marginBottom: 10}}>{homeData?.title}</h2>
      <Markdown rehypePlugins={[rehypeRaw]}>{homeData.content}</Markdown>
      <div style={{ display: 'flex', flexDirection: 'row', gap: '10px', marginTop: '20px' }}>
        {contactData.map((contact) => (
          <a href={contact.content} target='_blank' key={contact.id}>
            {contact.title}
          </a>
        ))}
      </div>
    </>
  )
}

export default Home