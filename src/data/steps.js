export const steps = [
  {
    id: 'intro',
    type: 'intro',
    mapImage: '/assets/baseMap-townName.png',
    media: [{ type: 'video', src: '/assets/kutchan-train.mov', caption: 'Riding the local Hakodate Line from Oshamambe station to Kutchan station, on our way to Niseko.' }],
  },
  {
    id: 'railroad',
    type: 'marker',
    text: `Japan’s extensive railway network consists of 30,625 km of rail lines, and carries over 9 billion passengers per year. As [Works in Progress](https://worksinprogress.co/issue/why-japan-has-such-good-railways/) recently reported, rail carries 28% of all passenger travel in Japan, more than double France's share (10%), over four times Germany's (6.4%), and more than a hundred times claimed by the United States (0.25%).

The railway first arrived in Japan in 1872, during the Meiji Restoration. Ninety years later, the bullet train arrived in tandem with the 1964 Tokyo Olympic Games. The Shinkansen (translated as ‘new main line’) runs at speeds of up to 200 mph and has since become an international symbol of speed, efficiency and modernity.`,
    hideMedia: true,
    mapImage: '/assets/baseMap-townName-railRoad.png',
    media: [],
  },
  {
    id: 'tokyo',
    type: 'marker',
    mapImage: '/assets/baseMap-townName.png', // reverts — railroads off, plain town dots again
    dotPixel: [1300, 2293], // Tokyo
    media: [{ type: 'video', src: '/assets/tokyo-street.mov', caption: 'Mid-February in Shibuya at 5pm in the evening. Shibuya, a ward in Tokyo, is home to the Shibuya Scramble Crossing.' }],
  },
  {
    id: 'route-1',
    type: 'marker',
    mapImage: '/assets/route-legID1.png',
    dotPixel: [945, 1960], // heading toward Iiyama / Nozawa Onsen — same dot as onsen-1
    media: [{ type: 'image', src: '/assets/nozawa-town.JPG', caption: 'Nozawa Onsen, an ancient farming and hot spring village, is nestled at the base of Mount Kenashi. The mountain’s summit sits at 1,650 meters above sea level. The town hosted the biathlon events during the 1998 Nagano Winter Olympics.'}],
  },
  {
    id: 'onsen-1-a',
    type: 'marker',
    text: 'Onsens are traditional public bathhouses centred around a natural, volcanically heated geothermal spring. They are deeply rooted in ancient Shinto purification rituals and Buddhist wellness traditions.',
    mapImage: '/assets/onsen-legID1.png',
    dotPixel: [945, 1960],
    media: [
      { type: 'image', src: '/assets/oyu.JPG', caption: `The village revolves around thirteen *soto-yu* (communal, outdoor public bathhouses). O-yu, literally "big bath," sits at the heart of the town center. Nozawa Onsen is famous for its very hot water: the natural sulphur spring feeds O-yu directly from the source, sometimes reaching temperatures close to 60°C.`}],
  },
  {
    id: 'onsen-1-b',
    type: 'marker',
    dotPixel: [945, 1960],
    media: [{ type: 'image', src: '/assets/not-bathhouse.jpeg', caption: 'A wooden building located near our *ryokan* (traditional Japanese inn) that is absolutely not an onsen.' }],
  },
  {
    id: 'onsen-1-c',
    type: 'marker',
    dotPixel: [945, 1960],
    media: [{ type: 'image', src: '/assets/snow-monkeys.jpg', caption: 'We visited the snow monkeys at Jigokudani, just across the valley from Nozawa Onsen. The Japanese macaques spend their time either along the steep banks of the Yokoyu River or bathing in the onsen.' }],
  },
  {
    id: 'onsen-1-d',
    type: 'marker',
    dotPixel: [945, 1960],
    media: [{ type: 'video', src: '/assets/snow-monkeys.mov', caption: 'I was enamoured with the baby snow monkeys playing in the onsen at Jigokudani.' }],
  },
  {
    id: 'route-2',
    type: 'marker',
    mapImage: '/assets/route-legID2.png',
    dotPixel: [1152, 1710], // heading toward Tsukioka — same dot as onsen-2
    media: [{ type: 'image', src: '/assets/tsukioka-street.JPG', caption: 'Tsukioka is located within the city of Shibata, in Niigata Prefecture. The onsen water here has one of the highest concentrations of sulfur in Japan and the water is known as *bijin no yu* (beauty water). It was discovered accidentally in 1915 by workers drilling for oil.' }],
  },
  {
    id: 'onsen-2',
    type: 'marker',
    mapImage: '/assets/onsen-legID2.png',
    dotPixel: [1152, 1710], // Tsukioka
    media: [{ type: 'video', src: '/assets/tsukioka.MOV', caption: 'Steam billowing from a bamboo pole along a street in Tsukioka.' }],
  },
  {
    id: 'route-3',
    type: 'marker',
    mapImage: '/assets/route-legID3.png',
    dotPixel: [1554, 915], // heading toward Aomori — same dot as onsen-3
    media: [{ type: 'video', src: '/assets/Aomori-train.mov', caption: 'The local Ou Line train pulling into Shin-Aomori station. We changed trains here from the Shinkansen to the local train into Aomori.' }],
  },
  {
    id: 'onsen-3',
    type: 'marker',
    mapImage: '/assets/onsen-legID3.png',
    dotPixel: [1554, 915], // Aomori
    media: [{ type: 'image', src: '/assets/aomori3.JPG', caption: "Aomori is a coastal city nestled between the sea and the mountains in the Tohoku region of Japan. The Sukayu onsen was founded in 1684 outside the city in the volcanically active Hakkoda mountains. The onsen has a mixed gender bathing hall called *Senjin Buro* ('bath of a thousand'). The onsen is known as a *toji*, or long-therapeutic bathing, destination." }],
  },
  {
    id: 'route-4-a',
    type: 'marker',
    mapImage: '/assets/route-legID4.png',
    dotPixel: [1557, 661],
    media: [{ type: 'image', src: '/assets/hakodate2.jpeg', caption: "We travelled on the shinkansen from Honshu (mainland Japan) and across the Tsugaru Strait to the port city of Hakodate in Hokkaido." }],
  },
  {
    id: 'route-4-b',
    type: 'marker',
    dotPixel: [1557, 661],
    media: [{ type: 'image', src: '/assets/pierrot.JPG', caption: "A fun fact: there is a fast-food chain exclusive to Hakodate called 'Lucky Pierrot'. Lucky Pierrot is so popular with the locals that McDonald's (among other chains) have been unable to establish any foothold in the city. There are *17* locations throughout the city." }],
  },
  {
    id: 'onsen-4-a',
    type: 'marker',
    hideMedia: true,
    text: 'Legend has it that in 1653, the ninth lord of the Matsumae clan was cured of an incurable illness at Yunokawa Onsen after his mother dreamed of the remedy. The water is locally regarded as having healed nobility and in 1868-69, the water was thus used to treat wounded soldiers in the Hakodate War.',
    mapImage: '/assets/onsen-legID4.png',
    dotPixel: [1557, 661],
    media: [],
  },
    {
    id: 'onsen-4-b',
    type: 'marker',
    dotPixel: [1557, 661],
    media: [{ type: 'image', src: '/assets/Onuma.JPG', caption: "While we were staying in Hakodate, we took a trip out to nearby Lake Onuma, which sits at the foot of Mount Komagatake. The lake was frozen over — it was a scene straight out of a winter wonderland." }],
  },
  {
    id: 'route-5',
    type: 'marker',
    mapImage: '/assets/route-legID5.png',
    dotPixel: [1557, 365],
    media: [{ type: 'image', src: '/assets/niseko.JPG', caption: 'Niseko, our final stop, sits directly at the foot of Mount Yotei, an active stratovolcano. The mountain is also known as Ezo Fuji, or the Mount Fuji of Hokkaido.'}],
  },
  {
    id: 'onsen-5',
    type: 'marker',
    hideMedia: true,
    text: 'Goshiki Onsen takes its name from *goshiki*, ‘five colours’, based on the belief that each of its five spring sources carries its own distinct character, blending together in the bath.',
    mapImage: '/assets/onsen-legID5.png',
    dotPixel: [1557, 365],
    media: [],
  },
]