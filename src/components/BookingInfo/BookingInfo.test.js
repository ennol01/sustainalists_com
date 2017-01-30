import React from 'react';
import renderer from 'react-test-renderer';
import BookingInfo from './BookingInfo';

describe('BookingInfo', () => {
  it('matches snapshot', () => {
    const component = renderer.create(
      <BookingInfo
        pricePerDay="55\\u20AC"
        bookingPeriod="Jan 2nd - Jan 4th"
        bookingDuration="3 days"
        total="165\u20AC"
      />,
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});