export const flexDefault = (justifyContent='flex-start', alignItems='flex-start') => {
  return {
    display: 'flex',
    justifyContent: justifyContent,
    alignItems: alignItems,
  };
};

export const flexColumn = (justifyContent='flex-start', alignItems='center') => {
  return {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: justifyContent,
    alignItems: alignItems,
  };
};

export const flexCenter = () => {
  return {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  };
};

