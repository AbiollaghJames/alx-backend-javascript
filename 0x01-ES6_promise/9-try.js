export default function guardrail(mathFunction) {
  try {
    return [mathFunction(), 'Guardrail was processed'];
  } catch (err) {
    return [`${err.name}: ${err.message}`, 'Guardrail was processed'];
  }
}
