import Head from "next/head";
import NavBar from "./NavBar"


export default function Layout(props) {
  return (
    <div>
      <Head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>Museums of India | An online resource for mapping the museums of India</title>
        <meta name="description" content="MuseumsofIndia.org is dynamic digital map of museums, where audiences 
        can view, and contribute, consolidated information about the museums of the country."/>
<meta name="image" content="https://www.museumsofindia.org/sp/sites/default/files/2017-05/Iconic_3.JPG"/>
<meta itemprop="name" content="Museums of India | An online resource for mapping the museums of India"/>
<meta itemprop="description"
 content="MuseumsofIndia.org is dynamic digital map of museums, where audiences can view, and contribute,
  consolidated information about the museums of the country."/>
      </Head>   
      <NavBar />
      
      <div id="main" className="container">{props.children}</div>
      <footer>
        <a href="https://www.museumsofindia.org/">
          <img src="/images/logo.jpg" alt="Museums of India Logo" />
        </a>
      </footer>
      <style jsx>{`
        

        
      `}</style>
      
    </div>
  );
}
