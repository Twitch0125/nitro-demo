import htm from 'htm';
import vhtml from 'vhtml';

export const html = htm.bind<string>(vhtml);