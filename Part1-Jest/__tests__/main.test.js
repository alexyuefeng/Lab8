const lvl = require('../assets/scripts/main');

describe('volumn level', ()=>{
   test('>66', ()=>{
       expect(lvl.formatVolumeIconPath(67)).toContain('3');
   });
   test('>33', ()=>{
    expect(lvl.formatVolumeIconPath(66)).toContain('2');
    });
    test('>0', ()=>{
        expect(lvl.formatVolumeIconPath(33)).toContain('1');
    });
    test('=0', ()=>{
        expect(lvl.formatVolumeIconPath(0)).toContain('0');
    });

});