import PropTypes from 'prop-types';

function Container({ children }) {
  const internalStyles = `
    px-4 mx-auto
    sm:max-w-xl
    md:max-w-2xl
    lg:max-w-4xl
    xl:max-w-6xl
    2xl:max-w-full
    2xl:px-32`;

  return <div className={internalStyles}>{children}</div>;
}

Container.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Container;
