import { memo } from 'react';

function Message({ result }) {
  if (!result) return null;
  if (result.status_code === 1) {
    return (
      <p className='message -valid'>{`Merci d'avoir voté ${result.rating} pour ce film !`}</p>
    );
  } else if (result.status_code === 12) {
    return (
      <p className='message -valid'>{`Merci, votre note a bien été modifiée par ${result.rating}`}</p>
    );
  } else {
    return (
      <p className='message -error'>
        Désolé, votre ne note n'a pas été prise en compte
      </p>
    );
  }
}

export default memo(Message);
