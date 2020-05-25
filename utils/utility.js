import Router from 'next/router'

export const backToHistory = () => {
    Router.back()
}

export const cc_format = (value) => {
    var v = value.replace(/\s+/g, '').replace(/[^0-9]/gi, '')
    // var matches = v.match(/\d{4,16}/g);
    // var match = matches && matches[0] || ''
    const match = v
    var parts = []

    for (let i = 0, len = match.length; i < len; i += 4) {
        parts.push(match.substring(i, i + 4))
    }

    if (parts.length) {
        return parts.join(' ')
    } else {
        return value
    }
}

export const expired_format = (value) => {
    // const match = value.replace(/\s/g, '').replace(/[^0-9\/]/gi, '')
    // let parts = match.split('/')
    // if (match.includes('/') && parts[0].length == 1) parts[0] = '0' + parts[0]

    let parts = []
    const match = value.replace(/\s/g, '').replace(/[^0-9]/gi, '')
    if (match.length > 2) {
        parts[0] = match.slice(0, 2)
        parts[1] = match.slice(2, match.length)
    } else {
        parts[0] = match
    }
    if (parts.length) {
        return parts.join('/')
    } else {
        return value
    }
}

export const getToday = (value) => {
    const today = new Date()
    const year = today.getFullYear()
    const monthArray = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
    const month = monthArray[today.getMonth()]
    const date = formatAsTwoDigits(today.getDate())
    return `${month} ${date}, ${year}`
}

const formatAsTwoDigits = (value) => {
    return value > 9 ? value : '0' + value
}

export const getCookie = (name) => {
    const dc = document.cookie;
    const prefix = name + '=';
    let begin = dc.indexOf(";" + prefix)
    if (begin == -1) {
        begin = dc.indexOf(prefix)
        if (begin != 0) return null
    }
    else {
        begin += 2
        var end = document.cookie.indexOf(';', begin)
        if (end == -1) {
            end = dc.length
        }
    }
    return decodeURI(dc.substring(begin + prefix.length, end))
}

export const numberWithCommas = (x) => {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

export const formatBillingDate = timestamp => {
    const dt = new Date(timestamp * 1000)
    const months = ['January', 'Febrary', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
    const date = dt.getDate()
    const year = dt.getFullYear()
    const month = months[dt.getMonth()]
    return `${month} ${date},${year}`
}