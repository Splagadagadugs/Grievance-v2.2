import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function Cards() {
  return (
    <div id="cardss">
    <div className='cards'>
      <h1>THE TEAM</h1>
      <h2>Supreme Student Council Officers</h2>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='images/President.png'
              title='Joanna Marie Balagtas'
              text='Sisimulan natin ang matalino at buong pusong pagabante ng interes ng mga estudyante ng Pamantasan na nakasandal sa pinalawig at pinagtibay na genuine student representationβmakikinig at tutugon kasabay ng sama-samang pagtindig upang maisakatuparan ang isang #πππ¦ππ§π­ππ¬ππ§πππ«ππππππ‘ππ­. '
              label='President'
              // path='/services'
            />
            <CardItem
              src='images/Vice-President.jpg'
              title='Ceth Angelo Tan'
              text='Sisimulan natin ang pagsasakatuparan ng bawat platapormang inilatag at ang pagsulong ng "Isang dekalidad na Edukasyon sa kabila ng mapanghamong panahon", at naniniwala ako na ang sama-samang pagtinding ay siyang ating maitataguyod upang maisakatuparan ang isang #πππ¦ππ§π­ππ¬ππ§πππ«ππππππ‘ππ­.'
              label='Vice-President'
             
            />
            <CardItem
              src='images/Secretary.jpg'
              title='Aliah Gabrielle Pangilinan'
              text='Sisimulan natin ang matalino at buong pusong pagabante ng interes ng mga estudyante ng Pamantasan na nakasandal sa pinalawig at pinagtibay na genuine student representationβmakikinig at tutugon kasabay ng sama-samang pagtindig upang maisakatuparan ang isang #πππ¦ππ§π­ππ¬ππ§πππ«ππππππ‘ππ­.'
              label='Secretary'
              
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='images/Auditor.jpg'
              title='Vom Marc Mendoza'
              text='Sisimulan natin ang mga mas inclusibong polisiya at proyektong tutugon sa bawat pangangailangan at layunin ng mga mag-aaral, at naniniwala ako na ang sama-samang pagtinding ay siyang ating maitataguyod upang maisakatuparan ang isang #πππ¦ππ§π­ππ¬ππ§πππ«ππππππ‘ππ­'
              label='Auditor'
              
            />
              <CardItem
              src='images/Treasurer.jpg'
              title='Aubrey Retardo'
              text='Sisimulan natin ang serbisyong hindi mahahadlangan ng anumang hamon sa paninilbihan, at naniniwala ako na ang sama-samang pagtinding ay siyang ating maitataguyod upang maisakatuparan ang isang #πππ¦ππ§π­ππ¬ππ§πππ«ππππππ‘ππ­.'
              label='Treasurer'
              
            />
            <CardItem
              src='images/pro.jpg'
              title='Julliene Jhorge Balatbat'
              text='akoβy handang tumugon para sa mga kapwa ko iskolar dahil batid natin na matamasa ng isaβt isa ang walang iwanan na lakbay sa loob at labas ng Pamantasan; at lalo na upang tumugon sa isang Aktibo, Inklusibo at Mapagkakatiwalaang Pamatasan #πππ¦ππ§π­ππ¬ππ§πππ«ππππππ‘ππ­. '
              label='Public Relations Officer'
              
            />
            
          </ul>
        </div>
      </div>
    </div>
    </div>
  );
}

export default Cards;