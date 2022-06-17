import randColor from '../FUNCTIONS/randColor';

function Pokemon({ name, url }) {
  return (
    <>
      <div className='kvc'>
        <p
          style={{
            fontSize: '35px',
            fontWeight: 'bold',
            color: randColor(),
            textAlign: 'left',
            margin: '0',
          }}
        >
          {name}:{' '}
        </p>
        <i>
          {' '}
          <p style={{ textDecoration: 'underline', margin: '10px' }}>{url}</p>
        </i>
      </div>
    </>
  );
}

export default Pokemon;
