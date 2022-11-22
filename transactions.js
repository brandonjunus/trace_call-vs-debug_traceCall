export const transactions = [
  // uniswap v3
  {
    transaction: {
      from: "0x09b12b2a126a4d1ff3cbdab959f302cd3ee32649",
      to: "0xe592427a0aece92de3edee1f18e0157c05861564",
      data: "0x414bf389000000000000000000000000c02aaa39b223fe8d0a0e5c4f27ead9083c756cc2000000000000000000000000d1420af453fd7bf940573431d416cace7ff8280c0000000000000000000000000000000000000000000000000000000000000bb800000000000000000000000009b12b2a126a4d1ff3cbdab959f302cd3ee3264900000000000000000000000000000000000000000000000000000000637c49090000000000000000000000000000000000000000000000000021eb208809aec900000000000000000000000000000000000000000000000b92d41bd5daea80000000000000000000000000000000000000000000000000000000000000000000",
      value: "0x21EB2088EA7800",
    },
    block: "0xF47DB8",
    txHash:
      "0x83adc84788e1e60a918ee50525d5fc2d7ceda5485704cffede5bb97d07c4d592",
  },
  // erc20 transfer
  {
    transaction: {
      from: "0x18bd663bb3aaa02239cf842f89681351698b525b",
      to: "0x06450dee7fd2fb8e39061434babcfc05599a6fb8",
      data: "0x9ff054df00000000000000000000000000000000000000000000000000000000000000b4",
    },
    block: "0xF4807F",
    txHash:
      "0x86fe933542cf34589a7e6187c0d9cb11b5765b023ceec401f418e53f865d5054 ",
  },
  // "claimZap"
  {
    transaction: {
      from: "0x0bae728a1520080bdba0f674e373a302922395eb",
      to: "0xdd49a93fdcae579ae50b4b9923325e9e335ec82b",
      data: "0x5a7b87f2000000000000000000000000000000000000000000000000000000000000012000000000000000000000000000000000000000000000000000000000000001a000000000000000000000000000000000000000000000000000000000000001c000000000000000000000000000000000000000000000000000000000000001e0ffffffffffffffffffffffffffffffffffffffffffffffffea0479320880000000000000000000000000000000000000000000000000000000be4ee0c3d457f4ffffffffffffffffffffffffffffffffffffffffffffffffea04793208800000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000040000000000000000000000000000000000000000000000000000000000000003000000000000000000000000d683c7051a28fa150eb3f4bd92263865d4a67778000000000000000000000000e259d085f55825624bba8571ed20984c125ba720000000000000000000000000b1fb0ba0676a1ffa83882c7f4805408ba232c1fa000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000",
    },
    block: "0xF480B2",
    txHash:
      "0x4d0bdfb9c7ac1cbbcc813f2d49dfb865b3b851f4abd967b3da6dae6b3771c531 ",
  },
  // coinbase transfer
  {
    transaction: {
      from: "0x503828976d22510aad0201ac7ec88293211d23da",
      to: "0xd26c327c9e5616ecc9299fd928fcc9d05b512421",
    },
    block: "0xF480C0",
    txHash:
      "0xcf185b97e50ac803e3cae18729692b1329e9421d6c277a66ed0c9efd12c26d13",
  },
  // swap (uniswapv2)
  {
    transaction: {
      to: "0x7a250d5630b4cf539739df2c5dacb4c659f2488d",
      from: "0x275d4ee769e007577713e6b3b70d522690cb241b",
      data: "0x7ff36ab50000000000000000000000000000000000000000000000102eeef1fc6ebd9f540000000000000000000000000000000000000000000000000000000000000080000000000000000000000000275d4ee769e007577713e6b3b70d522690cb241b00000000000000000000000000000000000000000000000000000000637c708b0000000000000000000000000000000000000000000000000000000000000002000000000000000000000000c02aaa39b223fe8d0a0e5c4f27ead9083c756cc2000000000000000000000000d640f12a736ddf3e2165e4aebdd93811d262f3bb",
    },
    block: "0xF480CD",
    txHash:
      "0xc048836353548fce32724667492bb524ffeb929617fbb4a4722b8e9621b8ffd3",
  },
];
