export const ballColorStyle = (status: string) => {
  if(status === 'Alive') {
    return'aliveMeter aliveMeterAlive'
  } else if (status === 'Dead'){
    return 'aliveMeter aliveMeterDead'
  } else {
    return 'aliveMeter'
  }
}

export default ballColorStyle