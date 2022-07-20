const results = [
    {
        id: 1,
        result:"what to watch",
        url: src="https://www.google.com/search?q=what+to+watch&rlz=1C1ONGR_en-GBGB938GB938&oq=what+to+watch&aqs=chrome..69i57j46i433i512j0i433i512j0i512l2j0i433i512j69i60l2.7681j0j4&sourceid=chrome&ie=UTF-8#wxpd=:true"
    }, 
    {
        id: 2,
        result:"what is the temperature",
        url: "https://www.google.com/search?q=what+is+the+temperature&rlz=1C1ONGR_en-GBGB938GB938&sxsrf=ALiCzsYiihmPXBSYSI748rge66Oe1PedOQ%3A1658324872784&ei=iAfYYrfBL5qAhbIPteu_mAo&ved=0ahUKEwi3pdvHzYf5AhUaQEEAHbX1D6MQ4dUDCA4&uact=5&oq=what+is+the+temperature&gs_lcp=Cgdnd3Mtd2l6EAMyEAgAEIAEELEDEIMBEEYQgAIyDggAEIAEELEDEIMBEMkDMgsIABCABBCxAxCDATILCAAQgAQQsQMQgwEyCwgAEIAEELEDEIMBMgsIABCABBCxAxCDATILCAAQgAQQsQMQgwEyCAgAELEDEIMBMggIABCxAxCDATIICAAQsQMQgwE6BwgAEEcQsAM6BwgAELADEEM6CggAEOQCELADGAE6DwguENQCEMgDELADEEMYAjoHCC4QsQMQQzoHCAAQsQMQQzoECAAQQzoFCAAQgAQ6CAgAEIAEEMkDOgUIABCSAzoICAAQgAQQsQM6DgguEIAEELEDEIMBENQCOgUIABCRAjoICAAQsQMQkQI6BAgAEAM6CQgAEA0QRhCAAjoHCAAQyQMQDToECAAQDUoECEEYAEoECEYYAVDGC1jON2D4OGgFcAF4AIABbIgBzg6SAQQyNC4xmAEAoAEByAESwAEB2gEGCAEQARgJ2gEGCAIQARgI&sclient=gws-wiz"
    },
    {
        id:3,
        result:"why were cornflakes invented",
        url: "https://www.google.com/search?q=why+were+cornflakes+invented&rlz=1C1ONGR_en-GBGB938GB938&oq=why+were+cornflakes+invented&aqs=chrome..69i57j0i512l9.688j0j4&sourceid=chrome&ie=UTF-8"
    },
    {
        id: 4,
        result:"why is the sky blue",
        url: "https://www.google.com/search?q=why+is+the+sky+blue&rlz=1C1ONGR_en-GBGB938GB938&oq=why+is+the+sky+blue&aqs=chrome..69i57j0i512l2j46i512j0i512l6.3831j0j9&sourceid=chrome&ie=UTF-8"
    },
    {
        id: 5,
        result:"who is the richest person in the world",
        url: "https://www.google.com/search?q=who+is+the+richest+person+in+the+world&rlz=1C1ONGR_en-GBGB938GB938&sxsrf=ALiCzsaKYoCmYOFBk3NJNpg-wm_U0ryt_A%3A1658325310458&ei=PgnYYqnNG46NgQbSh63IDw&ved=0ahUKEwip5LSYz4f5AhWORsAKHdJDC_kQ4dUDCA4&uact=5&oq=who+is+the+richest+person+in+the+world&gs_lcp=Cgdnd3Mtd2l6EAMyCAgAEIAEELEDMggIABCABBCxAzIFCAAQgAQyBQgAEIAEMgUIABCABDIFCAAQgAQyBQgAEIAEMgUIABCABDIFCAAQgAQyBQgAEIAEOgcIABBHELADOgcIABCwAxBDSgQIQRgASgQIRhgAUN0IWN0IYIgTaARwAXgAgAFLiAFLkgEBMZgBAKABAqABAcgBCsABAQ&sclient=gws-wiz"
    },
    {
        id:6,
        result:"who's birthday is it today",
        url: "https://www.google.com/search?q=who%27s+birthday+is+it+today&rlz=1C1ONGR_en-GBGB938GB938&sxsrf=ALiCzsYNS0z74QsvvAs1kbwszPmxMkx7dQ%3A1658325405763&ei=nQnYYpCiLtOV8gKux7PgDg&oq=who%27s+b&gs_lcp=Cgdnd3Mtd2l6EAMYADIFCAAQgAQyBQgAEIAEMgUIABCABDIFCAAQgAQyBQgAEIAEMgUIABCABDIFCAAQgAQyBQgAEIAEMgUIABCABDIFCAAQgAQ6BwgAEEcQsAM6BwgAELADEEM6CggAEOQCELADGAE6DAguEMgDELADEEMYAjoECAAQQzoKCAAQsQMQgwEQQzoLCC4QgAQQsQMQgwE6CwguELEDEIMBENQCOg4ILhCABBCxAxCDARDUAjoLCAAQgAQQsQMQgwE6BgizARCFBDoICAAQjwEQ6gI6EQguEIAEELEDEIMBEMcBENEDOg4ILhCABBCxAxDHARDRAzoFCC4QgAQ6BAguEEM6CAguEIAEENQCOgsILhCABBDHARCvAToHCC4QsQMQQzoQCC4QsQMQgwEQxwEQ0QMQQzoICAAQgAQQsQM6BwgAELEDEEM6CAguEIAEELEDOgcIABCABBAKSgQIQRgASgQIRhgBUJALWOctYLNAaAlwAXgAgAFziAHYB5IBBDExLjKYAQCgAQGwAQvIARPAAQHaAQYIARABGAnaAQYIAhABGAg&sclient=gws-wiz"    
    },
    {
        id: 7,
        result: "can we go to heaven with tattoos",
        url: "https://www.google.com/search?q=can+we+go+to+heaven+with+tattoos&rlz=1C1ONGR_en-GBGB938GB938&sxsrf=ALiCzsYQnvEwBrawLh4lUaLm6eEFEwf5cA%3A1658325431531&ei=twnYYrqNIM3rgAaJypfAAQ&ved=0ahUKEwj6xJLSz4f5AhXNNcAKHQnlBRgQ4dUDCA4&uact=5&oq=can+we+go+to+heaven+with+tattoos&gs_lcp=Cgdnd3Mtd2l6EAMyBQgAEIAEMgUIABCABDIFCAAQgAQyBQgAEIAEMgUIABCABDoHCAAQRxCwAzoHCAAQsAMQQ0oECEEYAEoECEYYAFCkgwNYpIMDYOGHA2gGcAF4AIABU4gBU5IBATGYAQCgAQKgAQHIAQrAAQE&sclient=gws-wiz"
    },
    {
        id: 8,
        result:"can men get pregnant",
        url: "https://www.google.com/search?q=can+men+get+pregnant&rlz=1C1ONGR_en-GBGB938GB938&sxsrf=ALiCzsaGs0bvVaMYUkvN2olDdZHpf_z7PA%3A1658325483735&ei=6wnYYoXCLJKHhbIP9sS0EA&oq=can+me&gs_lcp=Cgdnd3Mtd2l6EAMYADIICAAQsQMQkQIyBQgAEJECMggIABCABBCxAzIFCAAQgAQyBQgAEIAEMgUIABCABDIFCAAQgAQyBQgAEIAEMgUIABCABDIFCAAQgAQ6BwgAEEcQsAM6BwgAELADEEM6DwguENQCEMgDELADEEMYAToECAAQQzoLCC4QgAQQsQMQgwE6EQguEIAEELEDEIMBEMcBENEDOgsIABCABBCxAxCDAToOCC4QgAQQsQMQxwEQ0QM6BQguEIAEOgsILhCABBDHARDRAzoICC4QgAQQsQM6CwguEIAEELEDENQCOgUILhCxAzoOCC4QgAQQxwEQ0QMQ1AI6CAgAELEDEIMBSgQIQRgASgQIRhgAUMQGWIAUYJscaARwAXgAgAFmiAGoBJIBAzYuMZgBAKABAcgBC8ABAdoBBAgBGAg&sclient=gws-wiz"
    },
    {
        id:9,
        result:"how to lose weight fast",
        url: "https://www.google.com/search?q=how+to+lose+weight+fast&rlz=1C1ONGR_en-GBGB938GB938&sxsrf=ALiCzsZUU7Y5oBN2MIKIT1Ind29lPV0e0g%3A1658325530790&ei=GgrYYtrxL8TB8gKFlYSwCw&oq=how+to&gs_lcp=Cgdnd3Mtd2l6EAEYBDIECAAQQzIECAAQQzIECAAQQzIECC4QQzIFCAAQgAQyCAgAELEDEIMBMgsIABCABBCxAxCDATIICAAQsQMQgwEyCAgAELEDEIMBMgUIABCABDoHCAAQRxCwAzoLCC4QgAQQsQMQgwE6DgguEIAEELEDEMcBENEDOhQILhCABBCxAxCDARDHARDRAxDUAjoRCC4QgAQQsQMQgwEQxwEQ0QM6CwgAELEDEIMBEMkDOggILhCABBDUAkoECEEYAEoECEYYAFDmB1i2DGC-JGgDcAF4AIABaogB4AOSAQM1LjGYAQCgAQHIAQjAAQE&sclient=gws-wiz"
    },
    {
        id: 10,
        result:"are jellyfish immortal",
        url: "https://www.google.com/search?q=are+jellyfish+immortal&rlz=1C1ONGR_en-GBGB938GB938&oq=are+jell&aqs=chrome.0.0i355i433i512j46i433i512j69i57j0i512l7.8490j0j9&sourceid=chrome&ie=UTF-8"
    }
]

module.exports = results;
