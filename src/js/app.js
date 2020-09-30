export default function healthCondition(char) {
  if (char.health > 50) {
    return 'healthy';
  }

  if (char.health >= 15) {
    return 'wounded';
  }

  return 'critical';
}
