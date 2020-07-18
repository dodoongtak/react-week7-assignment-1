import React, { useEffect } from 'react';

import { useDispatch, useSelector } from 'react-redux';

import RestaurantDetail from './RestaurantDetail';

import {
  loadRestaurant,
} from './actions';

import { get } from './utils';

export default function RestaurantContainer({ restaurantId }) {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadRestaurant({ restaurantId }));
  }, []);

  const restaurant = useSelector(get('restaurant'));

  if (!restaurant) {
    return (
      <p>Loading...</p>
    );
  }

  return (
    <>
      <RestaurantDetail restaurant={restaurant} />
      <div>
        <label htmlFor="review-score">
          평점
        </label>
        <input type="number" id="review-score" />
      </div>
      <div>
        <label htmlFor="review-description">
          리뷰 남기기
        </label>
        <input type="text" id="review-description" />
      </div>
    </>
  );
}
