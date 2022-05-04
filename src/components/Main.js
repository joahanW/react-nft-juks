import React, { useState, useEffect } from 'react';
import instagramLogo from '../assets/owner/instagram.png';
import twitterLogo from '../assets/owner/twitter.png';
import moreIcon from '../assets/owner/more.png';
import './Main.css';

const Main = ({ selectedJuks, juksListData }) => {
  const [activeJuks, setActiveJuks] = useState(juksListData[0]);
  // console.log(selectedJuks, '🔥');
  // console.log(juksListData[selectedJuks], '🐼');

  useEffect(() => {
    setActiveJuks(juksListData[selectedJuks]);
  }, [juksListData, selectedJuks]);

  return (
    <div className="main">
      <div className="mainContent">
        <div className="juksHiglight">
          <div className="juksContainer">
            <img
              className="selectedJuks"
              src={activeJuks.image_original_url}
              alt=""
            />
          </div>
        </div>

        <div className="juksDetails" style={{ color: 'white' }}>
          <div className="title">
            {activeJuks.name}{' '}
            <span className="itemNumber">.#{activeJuks.token_id}</span>
          </div>

          <div className="owner">
            <div className="ownerImageContainer">
              <img
                src={
                  'https://ipfs.thirdweb.com/ipfs/QmUPrLRbDK1JG28LjzAbvT3Lyfi7HHp5j8oyBRZ7T5wtij/0.jpg'
                }
                alt=""
              />
            </div>

            <div className="ownerDetails">
              <div className="ownerNameAndHandle">
                <div>0xB5ec2fA99AC95B012368d6vB7BeD1508Aa895d6b6</div>
                <div div className="ownerHandle">
                  JOKSS | !JUKS #8229
                </div>
              </div>
              <div className="ownerLink">
                <img src={instagramLogo} alt="" />
              </div>
              <div className="ownerLink">
                <img src={twitterLogo} alt="" />
              </div>
              <div className="ownerLink">
                <img src={moreIcon} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
