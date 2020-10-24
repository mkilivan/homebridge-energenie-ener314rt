[![npm version](https://badge.fury.io/js/homebridge-energenie-ener314rt.svg)](https://badge.fury.io/js/homebridge-energenie-ener314rt)

# homebridge-energenie-ener314rt

Control your Energenie from your iOS device using apple's HomeKit. See [homebridge][homebridge] for more information controlling 3rd party devices through HomeKit.


## Getting Started

Plug in your ENER314-RT-VER01 board from Energenie onto the 26 pin or 40 pin connector of your Raspberry Pi.

<img src="https://energenie4u.co.uk/res/images/products/large/ENER314-RT.jpg" width="400" height="300">

## Installation

Make sure that [homebridge is installed](https://github.com/homebridge/homebridge#installation) first, then:

1. Install globally by running `npm install -g homebridge-energenie-ener314rt@latest`
2. Update your config file. See the sample below.

## Configuration

Exaple config.json:

```javascript
    "platforms": [
        {
            "platform": "Energenie-Ener314rt",
            "name": "Ener314rt",
            "switches": [
                {
                    "name": "Corner light",
                    "socket": 1
                }
            ]
        }
    ]
```

## Credits
* [homebridge][homebridge]
* [energenie-ener314rt](https://www.npmjs.com/package/energenie-ener314rt)

## License
This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details

## Bugs and Future Work

Future work is detailed on the [github issues page](https://github.com/mkilivan/homebridge-energenie-ener314rt/issues). Please raise any bugs, questions, queries or enhancements you have using this page.

https://github.com/mkilivan/homebridge-energenie-ener314rt/issues

[homebridge]: https://github.com/nfarina/homebridge