export interface TenderApi {
  fetchTender: (id: string) => Promise<any>;
}

const MockTender = {
  id: '123',
  goodsName: 'apple airpods in-ear bluetooth headset',
  section: 'электроника',
  description: `
    AirPods will forever change the way you use headphones. Whenever you pull your AirPods out of the charging case, they instantly turn on and connect to your iPhone, Apple Watch, iPad, or Mac.(1) Audio automatically plays as soon as you put them in your ears and pauses when you take them out. To adjust the volume, change the song, make a call, or even get directions, just double-tap to activate Siri.
    Driven by the custom Apple W1 chip, AirPods use optical sensors and a motion accelerometer to detect when they’re in your ears. Whether you’re using both AirPods or just one, the W1 chip automatically routes the audio and engages the microphone. And when you’re on a call or talking to Siri, an additional accelerometer works with beamforming microphones to filter out background noise and focus on the sound of your voice. Because the ultralow-power W1 chip manages battery life so well, AirPods deliver an incredible 5 hours of listening time on one charge.(2) And they’re made to keep up with you, thanks to a charging case that holds multiple additional charges for more than 24 hours of listening time.(3) Need a quick charge? Just 15 minutes in the case gives you 3 hours of listening time.(4)
  `,
  maxPrice: 1000,
  name: 'Наушники',
  goodsQuantity: 33,
  delivery: 'Самовывоз',
  tenderStartDate: '2018-12-12T17:33:27.669Z',
  images: [
    '../assets/images/apple.jpg',
    '../assets/images/apple1.jpg',
    '../assets/images/apple2.jpg',
    '../assets/images/apple3.jpg',
    '../assets/images/apple4.jpg',
    '../assets/images/apple5.jpg'
  ]
};

// tslint:disable-next-line:max-classes-per-file
export class MockTenderApi implements TenderApi {
  fetchTender = (id: string) => Promise.resolve<any>(MockTender);
}
