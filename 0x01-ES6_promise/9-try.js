export default function guardrail(mathFunction) {
  const result = [];

  try {
    result.push(mathFunction());
  } catch (err) {
    result.push(String(err));
  } finally {
    result.push('Guardrail was processed');
  }

  return result;
}
