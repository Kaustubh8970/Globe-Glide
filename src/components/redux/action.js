
export const bookHotel = (bookingData) => {
    return {
        type: 'BOOK_HOTEL',
        payload: bookingData
    }
}

    

export const cancelBooking = (bookingData) => {
    return {
        type: 'CANCEL_BOOKING',
        payload: bookingData
    }

}

