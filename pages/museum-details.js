import Head from 'next/head'
import styles from '../styles/Home.module.css'
import React, { useDebugValue } from 'react';
import ReactDOM from 'react-dom'

export default function Home() {
     return (
         
         <main className={styles.main}>
        <article className="main-content">
        {/* <!-- Left side--> */}

        <div className="left-side">
          <p>
            <i>
              Vaacha is a tribal museum placed in the heartland of the Rathwa
              tribe, a sub-group of Bhils. It is part of the Adivasi Academy
              founded by Bhasha Research and Publication Centre in 1998.</i
            >
          </p>

          {/* <!-- Quick facts--> */}

          <div className="more-section">
            <div className="title">Quick Facts</div>
            <div className="fact-row">
              <div className="fact-row-left">Address:</div>
              <div className="fact-row-right">
                Mawshbuit-Sweet Falls Road, East Khasi Hills District,
                Mawshbuit, Meghalaya 793007
              </div>
            </div>
            <div className="fact-row">
              <div className="fact-row-left">Phone:</div>
              <div className="fact-row-right">
                <a href="#">087300 25149</a>
              </div>
            </div>
            <div className="fact-row">
              <div className="fact-row-left">Email:</div>
              <div className="fact-row-right">
                <a href="#">xyz@vaacha.org</a>
              </div>
            </div>
            <div className="fact-row">
              <div className="fact-row-left">Visiting Time:</div>
              <div className="fact-row-right">
                Sunday 10am - 5pm<br />
                Monday Closed<br />
                Tuesday 10am - 5pm<br />
                Wednesday 10am - 5pm<br />
                Thursday 10am - 5pm<br />
                Friday 10am - 5pm<br />
                Saturday 10am - 2pm<br />
                Closed on National Holidays"
              </div>
            </div>
            <div className="fact-row">
              <div className="fact-row-left">Entry Fees:</div>
              <div className="fact-row-right">
                Rs. 20 for Children<br />
                Rs. 100 for Adults<br />
                Rs. 500 for Foreign Nationals"
              </div>
            </div>

            <div className="fact-row">
              <div className="fact-row-left">Established:</div>
              <div className="fact-row-right">1995</div>
            </div>

            <div className="fact-row">
              <div className="fact-row-left">Facilities & Services:</div>
              <div className="fact-row-right service-icons">
                <img
                  id="more-icon"
                  className="service-icon"
                  src="images/cam-icon.png"
                />
                <img className="service-icon" src="images/cam-icon.png" />
                <img className="service-icon" src="images/cam-icon.png" />
              </div>
              <div id="more-icon-title">
                <div className="arrow-bottom" data-popper-arrow></div>
                <div style={{position: "relative"}}>Photography</div>
              </div>
            </div>
          </div>

          <div id="slider-wrapper" className="splide">
            <div className="splide__track">
              <ul className="splide__list">
                <li className="splide__slide">
                  <img className="slider-image" src="images/slider-1.png" />
                </li>
                <li className="splide__slide">
                  <img className="slider-image" src="images/slider-2.png" />
                </li>
                <li className="splide__slide">
                  <img className="slider-image" src="images/slider-4.png" />
                </li>
                <li className="splide__slide">
                  <img className="slider-image" src="images/slider-3.png" />
                </li>
              </ul>
            </div>
          </div>
          <p>
            Vaacha is a tribal museum placed in the heartland of the Rathwa
            tribe, a sub-group of Bhils. It is part of the Adivasi Academy
            founded by Bhasha Research and Publication Centre in 1998. It has
            been named ‘Vaacha’ as a metaphor for the unheard Adivasi voice. The
            Rathwa lands border Madhya Pradesh to the east and Rajasthan to the
            north-west, thus it speaks of the thriving cultural diaspora of the
            Adivasi land expanding from west to central India. The museum speaks
            of time and space layered in different strata of history. Evidence
            of 12000 BC rock paintings and remnants of the medieval period
            Tejgadh fort are present in its vicinity at half a kilometer
            distance from the Academy. This is how the museum blends with its
            surrounding, representing socio-cultural identity of the place.
          </p>
          <p>
            The sense of belonging and identity is at the core of the Museum’s
            ideology as its curators, collectors, documenters and
            conservationists are from the same land and community. From its
            foundation it has resolved not to imitate other ethnographic museums
            in subject or design. Thus, Vaacha museum resolved to be of open
            walls fusing with the surrounding landscape and merging with the
            resources of the Adivasi Academy such as its library, Bhasha Van,
            Lakhara artist studio, Vasantshala school, traditional medicine
            garden, workshop space, etc. The museum stands as an ideal example
            of contextual space of learning from the Adivasi culture.
          </p>
          <p>
            Museums are active agents of social process, revitalization,
            representation and expressions of cultures, and Vaacha has taken
            many initiatives in this direction. In its annual program, the Tur
            Tribal Music Festival is an important event where people from
            different Adivasi communities are invited to perform, not on ‘stage’
            but in open spaces across the 10 acres of the Academy premises in
            natural surroundings.
          </p>
          <p>
            Vaacha museum and the Adivasi Academy complex is designed in tune
            with the mud houses of the Adivasi in the vicinity made with
            environmentally friendly red exposed bricks. It blends well with the
            surrounding earthy colours. The architect of the Adivasi complex is
            Vadodara based renowned architect Karan Grover."
          </p>
          {/* <!-- More Information --> */}

          <div className="more-section">
            <div className="title">More Information</div>
            <div className="fact-row">
              <div className="fact-row-left">Getting there</div>
              <div className="fact-row-right">
                Adivasi Academy is 90 Kilometer from Vadodara city in Gujarat.
                Railways - one can take train from Pratapgarh station (in
                Vadodara) to Tejgadh. From Tejgadh Railway station Adivasi
                Academy is at a distance of 1 kilometer. Bus - Regular state
                government buses runs from Baroda Bus stand going to Chota
                Udepur/Alirajpur. It takes around three hours to reach Tejgadh.
                Nearest airport is Vadodara from where Taxi could be hired to
                reach Tejgadh. It takes 2 hours.
              </div>
            </div>
            <div className="fact-row">
              <div className="fact-row-left">Average duration of visit</div>
              <div className="fact-row-right">3 Hours</div>
            </div>
            <div className="fact-row">
              <div className="fact-row-left">Best time of the day to visit</div>
              <div className="fact-row-right">
                The museum could be visited anytime of the day during office
                hours. Usually it does not remain crowded, but prior appointment
                with the PRO of Adivasi Academy helps in seeing it with the
                curator. Assistant curator is present all the time in the
                museum"
              </div>
            </div>
            <div className="fact-row">
              <div className="fact-row-left">Museum administered by</div>
              <div className="fact-row-right">Archaeological Survey of India</div>
            </div>
            <div className="fact-row">
              <div className="fact-row-left">Person in charge</div>
              <div className="fact-row-right">
                Name: Nagin Rathwa<br />
                Designation: Curator<br />
                Phone: 9879250378<br />
                Email: <a href="#">user@domain.com</a>
              </div>
            </div>

            <div className="fact-row">
              <div className="fact-row-left">Is the museum currently closed?</div>
              <div className="fact-row-right">Yes. Closed due to Covid19</div>
            </div>

            <div className="fact-row">
              <div className="fact-row-left">Website</div>
              <div className="fact-row-right">
                <a target="_blank" href="www.adivasiacademy.org"
                  >www.adivasiacademy.org</a
                >
              </div>
            </div>

            <div className="fact-row">
              <div className="fact-row-left">Virtual Tour</div>
              <div className="fact-row-right">
                <a href="#">Take the tour </a>
              </div>
            </div>
            <div className="last-updated">Last updated Nov 2020</div>
          </div>

          <div className="supported-by">Supported by H T Parekh Foundation.</div>

          <div className="tags">
            <div className="tag-pill">Tantra</div>
            <div className="tag-pill">Bhairava</div>
            <div className="tag-pill">Temple</div>
          </div>

          <div id="tabs" className="c-tabs no-js">
            <div className="c-tabs-nav">
              <a href="#" className="c-tabs-nav__link is-active">Notes</a>
              <a href="#" className="c-tabs-nav__link">Bibliography</a>
              <a href="#" className="c-tabs-nav__link">Explore</a>
            </div>
            <div className="c-tab is-active">
              <div className="c-tab__content">
                [1] Soundcloud.com, ‘Nrah’; ‘Nrah 1.’<br /><br />

                [2] Soundcloud.com, ‘Nkhuang.’<br /><br />

                [1] Soundcloud.com, ‘Nrah’; ‘Nrah 1.’<br /><br />

                [2] Soundcloud.com, ‘Nkhuang.’<br /><br />

                [1] Soundcloud.com, ‘Nrah’; ‘Nrah 1.’<br /><br />

                [2] Soundcloud.com, ‘Nkhuang.’<br /><br />

                [1] Soundcloud.com, ‘Nrah’; ‘Nrah 1.’<br /><br />

                [2] Soundcloud.com, ‘Nkhuang.’
              </div>
            </div>
            <div className="c-tab">
              <div className="c-tab__content">
                <p>
                  Bhattacharyya, Benoytosh. The Indian Buddhist Iconography. New
                  Delhi: ABI Prints & Publishing, 1924.
                </p>

                <p>
                  Conze, Edward. Buddhism A Short History. Oxford: Oneworld,
                  2008.
                </p>

                <p>
                  Dutta, Sristidhar, and Byomakesh Tripathy. Buddhism in
                  Arunachal Pradesh, New Delhi: Indus Publishing,2008.
                </p>

                <p>
                  Guthrie, Elizabeth. ‘A Study of the History and Cult of the
                  Buddhist Earth Deity in Mainland Southeast Asia.’ PhD thesis,
                  Department of Philosophy and Religious Studies, University of
                  Canterbury, 2004.
                </p>

                <p>
                  Keown, Damien. A Dictionary of Buddhism. New York: Oxford
                  University Press, 2003.
                </p>

                <p>
                  Nageswara, C V. A Survey of Theravadi Buddhist Monasteries of
                  Assam and Arunachal Pradesh. Guwahati: Vivekananda Kendra
                  Institute of Culture, 2007.
                </p>

                <p>
                  Pierre,Jean, and Gaston Aubert. ‘Nāga-Buddha Images of the
                  Dvāravatī Period: A Possible Link between Dvāravatī and
                  Angkor.’ Journal of the Siam Society, no. 98 (2010): 116–150.
                </p>

                <p>
                  Guthrie, Elizabeth. ‘A Study of the History and Cult of the
                  Buddhist Earth Deity in Mainland Southeast Asia.’ PhD thesis,
                  Department of Philosophy and Religious Studies, University of
                  Canterbury, 2004.
                </p>

                <p>
                  Keown, Damien. A Dictionary of Buddhism. New York: Oxford
                  University Press, 2003.
                </p>

                <p>
                  Nageswara, C V. A Survey of Theravadi Buddhist Monasteries of
                  Assam and Arunachal Pradesh. Guwahati: Vivekananda Kendra
                  Institute of Culture, 2007.
                </p>

                <p>
                  Pierre,Jean, and Gaston Aubert. ‘Nāga-Buddha Images of the
                  Dvāravatī Period: A Possible Link between Dvāravatī and
                  Angkor.’ Journal of the Siam Society, no. 98 (2010): 116–150.
                </p>
              </div>
            </div>
            <div className="c-tab">
              <div className="c-tab__content">
                <p>
                  Sed in condimentum justo. Integer vitae risus nisi. Mauris
                  posuere arcu neque, in dictum mauris pellentesque ut. Ut
                  malesuada libero volutpat vulputate auctor. Maecenas cursus
                  odio non purus volutpat, ut gravida sapien dictum. Nunc erat
                  libero, interdum sed fermentum a, tempus sit amet leo. Vivamus
                  molestie ligula non turpis commodo, non volutpat urna
                  interdum. Vivamus ullamcorper lorem vitae nibh lacinia rutrum.
                </p>
                <p>
                  Nullam ut dui non tellus imperdiet rhoncus eget sit amet
                  nulla. Vivamus lacinia dui nec fringilla dignissim. Aliquam
                  erat volutpat. Fusce dignissim quam vel placerat sagittis.
                  Donec nec consequat dolor. Maecenas imperdiet velit non
                  rhoncus venenatis. Proin ut orci a ipsum porttitor vestibulum.
                  Fusce et augue sed ligula faucibus venenatis. Suspendisse sit
                  amet nunc dictum, porttitor neque id, dictum magna. Integer
                  bibendum dui urna, non pharetra nunc cursus id.
                </p>
                <p>
                  Mauris bibendum et sem vitae scelerisque. Vestibulum bibendum
                  nibh malesuada molestie porta. Vivamus vel est ut sapien
                  porttitor iaculis molestie eget enim. Sed id condimentum nunc.
                  Maecenas lorem magna, cursus accumsan rutrum at, pellentesque
                  sed nisi. Integer in arcu ac libero gravida egestas. Mauris
                  condimentum a lorem placerat malesuada.
                </p>
              </div>
            </div>
          </div>

          <div className="article-end">
            <div className="social">
              <img className="social-icon" src="images/twitter-icon-dark.png" />
              <img className="social-icon" src="images/email-icon-dark.png" />
              <img className="social-icon" src="images/facebook-icon-dark.png" />
              <img
                className="social-icon share-icon"
                src="images/share-icon-dark.png"
              />
            </div>
            <div className="rights-section">
              <img className="rights-icon" src="images/rights-icon.png" />Some
              rights reserved
            </div>
          </div>
        </div>
        {/* <!--Right side--> */}

        <div className="right-side">
          <div className="more-topics">
            <div className="title">More on this topic</div>
            <div className="more-topic-card">
              <div className="title">Pune-Okayama Friendship Garden</div>
              <div className="author">Moby Sara Zachariah</div>
            </div>
            <div className="more-topic-card">
              <div className="title">Pune-Okayama Friendship Garden</div>
              <div className="author">Moby Sara Zachariah</div>
            </div>
            <div className="more-topic-card">
              <div className="title">Pune-Okayama Friendship Garden</div>
              <div className="author">Moby Sara Zachariah</div>
            </div>
            <div className="more-topic-card">
              <div className="title">Pune-Okayama Friendship Garden</div>
              <div className="author">Moby Sara Zachariah</div>
            </div>
            <div className="more-topic-card">
              <div className="title">Pune-Okayama Friendship Garden</div>
              <div className="author">Moby Sara Zachariah</div>
            </div>
            <div className="more-topic-card">
              <div className="title">Pune-Okayama Friendship Garden</div>
              <div className="author">Moby Sara Zachariah</div>
            </div>
          </div>
          <img className="more-topic-images" src="images/more-banner-1.png" />
          <img className="more-topic-images" src="images/more-banner-2.png" />
          <img className="more-topic-images" src="images/more-banner-3.png" />
          <img className="more-topic-images" src="images/more-banner-4.png" />
        </div>
        <div className="bottom-border"></div>
      </article>
      <div>
        <div className="read-more-text">Read More</div>
        <div className="read-more-wrapper">
          <div className="blog-card">
            <img className="card-image" src="images/lib-1.png" />
            <div className="card-left">
              <div className="card-type">Image Gallery</div>
              <div className="card-title">Pune-Okayama Friendship Garden</div>
              <div className="card-category">Sculpture / Iconography</div>
              <div className="card-description">
                The Pune-Okayama Friendship Garden on Sinhagad Road is based on
                one of the major gardens of Japan.
              </div>
              <div className="card-author">Moby Sara Zachariah</div>
              <div className="card-icons">
                <img
                  className="card-icon-img"
                  src="images/icon-1.png"
                  alt="share"
                />
                <img
                  className="card-icon-img"
                  src="images/icon-2.png"
                  alt="bookmark"
                />
              </div>
            </div>
          </div>

          <div className="blog-card">
            <img className="card-image" src="images/lib-2.png" />
            <div className="card-left">
              <div className="card-type">Image Gallery</div>
              <div className="card-title">Pune-Okayama Friendship Garden</div>
              <div className="card-category">Sculpture / Iconography</div>
              <div className="card-description">
                The Pune-Okayama Friendship Garden on Sinhagad Road is based on
                one of the major gardens of Japan.
              </div>
              <div className="card-author">Moby Sara Zachariah</div>
              <div className="card-icons">
                <img
                  className="card-icon-img"
                  src="images/icon-1.png"
                  alt="share"
                />
                <img
                  className="card-icon-img"
                  src="images/icon-2.png"
                  alt="bookmark"
                />
              </div>
            </div>
          </div>

          <div className="blog-card">
            <img className="card-image" src="images/lib-3.png" />
            <div className="card-left">
              <div className="card-type">Image Gallery</div>
              <div className="card-title">Pune-Okayama Friendship Garden</div>
              <div className="card-category">Sculpture / Iconography</div>
              <div className="card-description">
                The Pune-Okayama Friendship Garden on Sinhagad Road is based on
                one of the major gardens of Japan.
              </div>
              <div className="card-author">Moby Sara Zachariah</div>
              <div className="card-icons">
                <img
                  className="card-icon-img"
                  src="images/icon-1.png"
                  alt="share"
                />
                <img
                  className="card-icon-img"
                  src="images/icon-2.png"
                  alt="bookmark"
                />
              </div>
            </div>
          </div>

          <div className="blog-card">
            <img className="card-image" src="images/lib-4.png" />
            <div className="card-left">
              <div className="card-type">Image Gallery</div>
              <div className="card-title">Pune-Okayama Friendship Garden</div>
              <div className="card-category">Sculpture / Iconography</div>
              <div className="card-description">
                The Pune-Okayama Friendship Garden on Sinhagad Road is based on
                one of the major gardens of Japan.
              </div>
              <div className="card-author">Moby Sara Zachariah</div>
              <div className="card-icons">
                <img
                  className="card-icon-img"
                  src="images/icon-1.png"
                  alt="share"
                />
                <img
                  className="card-icon-img"
                  src="images/icon-2.png"
                  alt="bookmark"
                />
              </div>
            </div>
          </div>

          <div className="blog-card">
            <img className="card-image" src="images/lib-5.png" />
            <div className="card-left">
              <div className="card-type">Image Gallery</div>
              <div className="card-title">Pune-Okayama Friendship Garden</div>
              <div className="card-category">Sculpture / Iconography</div>
              <div className="card-description">
                The Pune-Okayama Friendship Garden on Sinhagad Road is based on
                one of the major gardens of Japan.
              </div>
              <div className="card-author">Moby Sara Zachariah</div>
              <div className="card-icons">
                <img
                  className="card-icon-img"
                  src="images/icon-1.png"
                  alt="share"
                />
                <img
                  className="card-icon-img"
                  src="images/icon-2.png"
                  alt="bookmark"
                />
              </div>
            </div>
          </div>

          <div className="blog-card">
            <img className="card-image" src="images/lib-6.png" />
            <div className="card-left">
              <div className="card-type">Image Gallery</div>
              <div className="card-title">Pune-Okayama Friendship Garden</div>
              <div className="card-category">Sculpture / Iconography</div>
              <div className="card-description">
                The Pune-Okayama Friendship Garden on Sinhagad Road is based on
                one of the major gardens of Japan.
              </div>
              <div className="card-author">Moby Sara Zachariah</div>
              <div className="card-icons">
                <img
                  className="card-icon-img"
                  src="images/icon-1.png"
                  alt="share"
                />
                <img
                  className="card-icon-img"
                  src="images/icon-2.png"
                  alt="bookmark"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
         </main>
    )
 }
