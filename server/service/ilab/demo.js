const lab = require('./api')

const ticket = 'Q4jmKtmnZRw3tKOFId4F5ZpbzPF9zf1zMhGmt3YYVoKo29nuzSaAFMaTAW%2B4ybqdduHAA1IQYleQg9VC7e7rrX7pyNWzgkXinIvEv1ZA7IY%3D'

lab.getToken(ticket)
    .then(res => {
        console.log(res.data)
    })
    .catch(err => {
        console.log(err)
    })

