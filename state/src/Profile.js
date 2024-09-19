import React, { useState } from 'react';

const Profile = () => {
  const [isFirst, setIsFirst] = useState('');
  const [isLast, setISLast] = useState('');
  const [isEdit, setIsEdit] = useState(false);

  const onSubmit = (e) => {
    e.preventDefault();
    setIsEdit(!isEdit);
  };

  return (
    <form onSubmit={onSubmit}>
      <label>First name:</label>
      {isEdit ? (
        <b>{isFirst}</b>
      ) : (
        <input value={isFirst} onChange={(e) => setIsFirst(e.target.value)} />
      )}
      <label>Last name:</label>
      {isEdit ? (
        <b>{isLast}</b>
      ) : (
        <input value={isLast} onChange={(e) => setISLast(e.target.value)} />
      )}
      <button type="submit">{!isEdit ? 'Save' : 'Edit'} Profile</button>
      <p>
        <i>
          Hello, {isFirst} {isLast}!
        </i>
      </p>
    </form>
  );
};

export default Profile;
