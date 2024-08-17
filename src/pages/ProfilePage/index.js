import React, { useEffect, useState } from 'react';
//import { Auth, DataStore } from 'aws-amplify';
//import { User } from '../../models';

import { useAuthContext } from '../../contexts/AuthContext';



import { useNavigate } from 'react-router-dom';
import "./style.css"


const Profile = () => {

  const { dbUser } = useAuthContext();
  const [name, setName] = useState(dbUser?.name || '');
  const [address, setAddress] = useState(dbUser?.address || '');
  const [lat, setLat] = useState(dbUser?.lat + '' || '0');
  const [lng, setLng] = useState(dbUser?.lng + '' || '0');
  const { sub, setDbUser } = useAuthContext();
  const navigate = useNavigate();

  const onSave = async () => {
    if (dbUser) {
      await updateUser();
    } else {
      await createUser();
    }
    navigate(-1);
  };

  const updateUser = async () => {
    const user = await DataStore.save(
      User.copyOf(dbUser, (updated) => {
        updated.name = name;
        updated.address = address;
        updated.lat = parseFloat(lat);
        updated.lng = parseFloat(lng);
      })
    );
    setDbUser(user);
  };

  const createUser = async () => {
    try {
      const user = await DataStore.save(
        new User({
          name,
          address,
          lat: parseFloat(lat),
          lng: parseFloat(lng),
          sub,
        })
      );
      setDbUser(user);
    } catch (e) {
      alert('Error: ' + e.message);
    }
  };

  return (
    <div>
      <h1 style={styles.title}>Profile</h1>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Name"
        style={styles.input}
      />
      <input
        type="text"
        value={address}
        onChange={(e) => setAddress(e.target.value)}
        placeholder="Address"
        style={styles.input}
      />
      <input
        type="number"
        value={lat}
        onChange={(e) => setLat(e.target.value)}
        placeholder="Latitude"
        style={styles.input}
      />
      <input
        type="number"
        value={lng}
        onChange={(e) => setLng(e.target.value)}
        placeholder="Longitude"
        style={styles.input}
      />
      <button onClick={onSave}>Save</button>
      <p
        onClick={() => Auth.signOut()}
        style={{ textAlign: 'center', color: 'red', margin: 10 }}
      >
        Sign out
      </p>
    </div>
  );
};

export default Profile;
