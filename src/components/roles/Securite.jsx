import { useState } from 'react';
import { users } from '../../datasets/users.js';
import '../../styles/roles.css';

function Securite() {
  const [userName, setUserCode] = useState('');
  const handleChange = (e) => {
    setUserCode(e.target.value);
  };

  const GetPassengerInfo = (Passenger) => {
    const { firstName, lastName, id } = Passenger;
    return (
      <div className="roles-content">
        <div>Nom : {lastName}</div>
        <div>Prénom : {firstName}</div>
        <div>Code d accès :{id}</div>
      </div>
    );
  };

  const GetPassengerSection = () => {
    const Passenger = users.find(
      (u) => u.lastName.toLocaleLowerCase() == userName.toLocaleLowerCase(),
    );
    return (
      <div>
        {Passenger ? GetPassengerInfo(Passenger) : 'Passager non trouvé...'}
      </div>
    );
  };

  return (
    <div className="roles-container">
      <div className="roles-title">Accès : </div>
      <h2 className="roles-content">Saisissez le nom du passager :</h2>
      <form>
        <div>
          <input
            type="text"
            maxLength="20"
            value={userName}
            onChange={handleChange}
            placeholder="nom du passager"
          />
          <span className="underline" />
        </div>
        {GetPassengerSection()}
      </form>
    </div>
  );
}

export default Securite;
