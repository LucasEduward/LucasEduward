# Custom HUD Screen Vignette Effect

Teste de addon de Minecraft Bedrock (behavior pack + resource pack) feito com a [Scripting API](https://learn.microsoft.com/minecraft/creator/scriptapi) (`@minecraft/server`), tentando simular via UI customizada o efeito de vinheta que o Minecraft vanilla mostra quando o jogador está dentro de neve em pó (powder snow).

## O que faz

- Usar um `stick` alterna um modo de debug (`debugOn`).
- Com o debug ativo, a action bar de todos os jogadores é atualizada a cada tick com um valor animado (onda senoidal, passos de 0 a 20), simulando a intensidade do efeito.
- Ao desativar, a action bar é limpa para todos os jogadores.

## Estrutura

- `ch_one_bp/scripts/main.js` — lógica principal do addon.
- `ch_one_bp/` — behavior pack.
- `ch_one_rp/` — resource pack.
