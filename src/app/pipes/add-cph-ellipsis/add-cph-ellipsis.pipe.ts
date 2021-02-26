import { Pipe, PipeTransform } from '@angular/core';
import {bech32} from 'cypheriumjs-crypto';
@Pipe({
    name: 'addCphEllipsis'
})
export class AddCphEllipsisPipe implements PipeTransform {

    transform(value: any, ...args: any[]): any {
        console.log(value)
        if (!value) {
            return '';
        }
        value = value.replace('0x', '');
        console.log(value)
        const bech32addr = bech32.toBech32Address(value)
        console.log(bech32addr)
        return bech32addr.slice(0, 10) + '...' + bech32addr.slice(-10);
    }

}
