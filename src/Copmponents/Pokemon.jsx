import randColor from '../FUNCTIONS/randColor';

function Pokemon({ name, url }) {
  return (
    <>
      <div className='kvc'>
        <h2
          style={{
            color: randColor(),
            textAlign: 'left',
            margin: '0',
            textTransform: 'capitalize',
          }}
        >
          {name}:{' '}
        </h2>
        <a href={url}>{url}</a>
      </div>
    </>
  );
}

export default Pokemon;
