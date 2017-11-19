const express = require('express')
const app = express()
const port = 8000;

app.get('/:number/:base?', (req, res) => {
    let base = req.params.base
    let numOnly = req.params.number

    if (base === 'hex') {
        let hexStr = req.params.number
        let response = {
            orginal: { 
                value: hexStr,
                base: base,
            }, 
            conversions: { 
                Dec: parseInt(hexStr, 16).toString(2), 
                Bin: parseInt(hexStr, 16),
                Hex: hexStr
            }
        }
        res.send(JSON.stringify(response))

    } else if (base === 'bin') {
        let binaryStr = req.params.number
        let response = {
            original: { 
                value: binaryStr,
                base: base
            },
            conversions: { 
            toDec: parseInt(binaryStr, 2),
            toHex: parseInt(binaryStr, 2).toString(16)
            }
        }
        res.send(JSON.stringify(response))

    } else if (base === 'dec' || base === undefined) {
        let num = parseInt(req.params.number)
        let response = {
            original: { 
                value: num,
                base: base
            }, 
            conversions: { 
            toBin: num.toString(2),
            toHex: num.toString(16)
            }
        }

        res.send(response)
        }
    })

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
}) 