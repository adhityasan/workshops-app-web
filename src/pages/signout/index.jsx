import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Redirect } from 'react-router-dom';

import { signout } from 'stores/modules/auth/action';
import Loader from 'layouts/loader';

import localStorage from 'helpers/localStorage';

const Signout = () => {
  const dispatch = useDispatch();
  const [navigate, setNavigate] = useState(false);

  useEffect(() => {
    // setTimeout only to see some loader for a sec
    setTimeout(() => setNavigate(true), 1000);
    dispatch(signout());
    localStorage.token.removeItem();
  }, [dispatch]);

  return navigate ? <Redirect to="/" /> : <Loader />;
};

export default Signout;
