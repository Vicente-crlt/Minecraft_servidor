const bedrock = require('bedrock-protocol');

const client = bedrock.createClient({
  host: 'Amelia1910.aternos.me',
  port: 19132, // Confirme a porta no painel Aternos
  username: 'Raboot_356'
});

client.on('join', () => {
  console.log('[NPC] Conexão estabelecida.');
});

client.on('spawn', () => {
  console.log('[NPC] Entrou no mundo.');
});

client.on('close', () => {
  console.log('[NPC] Conexão encerrada.');
});

client.on('error', (err) => {
  console.error('[NPC] Erro:', err.code, err.message);
});
