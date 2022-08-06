/******************************

脚本功能：TIDAL解锁HiFi Plus
软件版本：2.48.0【美区下载】
下载地址：http://t.cn/A662gqIO
脚本作者：Hausd0rff
更新时间：2022-08-05
脚本发布：https://t.me/yqc_123
问题反馈：https://t.me/yqc_777
使用声明：⚠️此脚本仅供学习与交流，
        请勿转载与贩卖！⚠️⚠️⚠️
*******************************
[rewrite_local]
# > TIDAL解锁HiFi Plus
^https?:\/\/api\.tidal\.com\/v1\/tracks/\d+\/playbackinfopostpaywall.+ url script-analyze-echo-response https://raw.githubusercontent.com/yqc007/QuantumultX/master/TidalHiFiPlusCrack.js

[mitm] 
hostname = api.tidal.com

*******************************/

var encode_version = 'hausd0rff',
    uukfu = '__0xe7a1e',
    __0xe7a1e = ['w4bCo2I=', 'UsO2wrLCuWg=', 'NsKWw4fCsMOM', 'MsKQf8KCYw==', 'JcKvacKtDg==', 'wrHCtMOqRcKH', 'cwwNRQ0=', 'wpk9IMO8w4c=', 'w7fCrijCgmk=', 'e8Ogw7sSfg==', 'w4t0YMO7w48=', 'eTYUXQ4=', 'Q0/Dm2xu', 'EsOJw55SEA==', 'eMK/cMO0Tw==', 'R2HDnW9W', 'wpTCjA9cNQ==', 'w7AMw4HDg8K7', 'w4fCp8OhVMOs', 'w7Z5w6rDvj4=', 'wrDChMOAUMKh', 'wqXDgMKgwrYG', 'aWPDjUI=', 'A8KbPDtV', 'DFLDosOewro=', 'w4QVDMOQIw==', 'PTU/wp0s', 'HgPCl8KFwqQ=', 'wqrDll9Zwok=', 'ZsKmwr0Mwrg=', 'w7Byc8Oaw4c=', 'bcOZP38e', 'wpLDpcKhwqAQ', 'F8KnacKEbQ==', 'NsKeXMKjQA==', 'Dx3Cqg==', 'E8KgTsKzWQ==', 'w5bCnhnCs1PljojmlZfov5Pmn48Z', 'PMKnMip06K6b5rGm6LeP5pWawpI=', 'HMKuwqYDXw==', 'Rxs4wqkx', 'JMKow63CkcOS', 'wojCgxZSGQ==', 'WcOOw7EvWg==', 'LMKxesK7Wg==', 'XcKfRsOqSw==', 'b8OWw54=', 'ScKMwrkqwqE=', 'IsOnaVXDsg==', 'AMKYf2xq', 'OUHDhsOrwqk=', 'w7vDt1rDv8O6', 'w63Dg1HDp8OC', 'wozDjsKYwqsk', 'wp7DgGxKwrk=', 'w6xDwoNSMg==', 'w6DClGdRBQ==', 'ZAk2', 'KhDCtAfCpA==', 'RnnDoEJ8', 'w41Bw6TDiyk=', 'H1TDu8KOwpM=', 'FUDDqMKywqU=', 'ZMKBXcO6ZQ==', 'wpsyC8O0w6XorZjmsofotobml4HCjg==', 'QsK2WA==', 'JcKYwqXDpm0=', 'TsOZw657OQ==', 'wqbClxpIOQ==', 'RsO8w4FZMg==', 'w4/CvndZEw==', 'DlrDncO0wqA=', 'YAjChA==', 'wo/DscKi', 'fmLDjV5CwobCvSoF', 'w4xRwoVCJsKhw4lIUWDCusOkwpvDnQ==', '54iA5p+25YyB7729UQvkvLvlrZnmnJvlvKvnqozvv7Povp/orLrmlrvmjbDmib/kuafnmJLltZfkvK0=', '5YqP6Zu854iz5p2O5Y6L77yIw5nDmeS/leWtmOach+W8s+eppg==', 'HyTCtT/Cjw==', 'PGPDosK+wrY=', 'w5lsNUh4', 'w4HChUtSKw==', 'w5kowqwpWw==', 'w4wnwroreA==', 'Z8OCwrPCgUM=', 'UcOjwpbCuUI=', 'w60zwp0eYQ==', 'w6LCtXNxJw==', 'w5x8w4PDigo=', 'L8KnTMK0bw==', 'FcKCw6Q=', 'UsOUBWUNw5rDmQ==', 'wrcCw4XDoFU6wrPDlsKQwowqa8KbPgXDpQhya8Kb', 'IMKuwoIBSEIOw6xlZ2/Cl2nCucO9FQ/Dp8K4w5Eewr1wNylZwrI8NMK4CMOKwqM9w6XCgzQYM8KCRWDDry5WLsOhw6vDjSwIw6YhH8K2DMKGcBUbIiTCosK5WVYmwo9awoR6Y8K4VXVFwrw3wrvChQ==', 'w43CtmxGTRPDkcKtXMOgw7DDl0odwpU6dQ==', 'A8KrMzs1DUgjw5rDlg==', 'w6UFHcOBOcKjw6J9w7TDgMKzKcKwwrzCvjPDusK7wr8VI8K+KcKOd1smPsKWw69TJGMbdSPDisKOQg==', 'QcOcw5gTT8OCGWbCscK+T3MfcTBOwo7CtQlwD8Khw4nCucOBAWjClcOYwoEBwo1nwoTCqMKaAMKQbxDDtcOjwq/CqhBIw7rCicKXXcKwAcOREsKgBMKyJcKtwqQ5FsKFw5J+SyAWbsObwofDqMOAOsKEDW5Xwpshw6sLQkgtOcKBwpVrwpXDl8Oiw4bDnsOSDcOdZMKYw5Ahw6rCmhIQw4sbSRfCtcKswpfCkC3CqMK6csOLC8KBwp4xBSB3woLDgiPDpcKGw6jClCPDsMKBdQl3wqTDgMO7w5nCnAvCmSbDhkTClcOmEWjCpx1Sc8K7w4LCoMKHwqnCksOnwrTCmyrCg8O5WsKgw6gLJsKWccOpw6s5w4LCsGZewrAYw6HDkQrDtBFvw4fCvUfCoS8sW1nCocKGw4XDlsKAw4zDqEB4IsOhwr8xLsO7VsK3w7YHwphIOMK3w7B1w4bCjsOYAQE+NMKQBGvCqxnCpg7CjzrDriZkwqbCrDHCuMOYwrocwqlgw5bCssO1wpDCgErDiRN4w6LCsUw7w4Imw6rCksKxFjgiNnvDuRTCn8KBRUnDm1J+CsOse3vCtsK3wp7CosKnKCfCqzUkw6Ujw6lAwo/Crg0OUHxeYF1AZ8KFfl9TNXvCkcK6ZmZXCcK5Z8KJw7TDoBjCvE5dw77DvB5Owr3CgsKEUMKZw5rDssKawpwgw70iwoNxwrbDg8KQdkbDnEZtFEdzwrNcCcK+BcKAw7fCrMOefcOsworCmsOGdsOzw7cbwqh0wod0QFrCviMfwpLCoCrDrMKfwrXCgH1Gw4zDpsKiVD4gwpgLwp4bBTlEDcOZDg7Dj8O5wrnCpnHDm8ObfcOfH8O4wpnCtBIIwrkMKMKPK8KhCMOfDEjDi0rClMOlwp3DmXLDt1fCvQ==', 'wp7DlS1QMXbDo8KZw7fCqktJwqFVw7V3', 'wqw3BsOww6fDm8KaalPCkilraVXCrMOnU2/CmMOjYzZ7e27CisOjwqs7aMK7w5zDg8Ocwp3DhgvCisKoGsKsccKuAivDqQ4gwrFpw7cuacObwqlkFEBUDhoYwrRXw7fDoSfDo8K2fEZYX27Ci8KVwplAwrvDuADDjhzDtsO/IU53w44qw5YwfiDDoxlww5jDo8Ovwr0sXTYjF8Ovdx3DpiDDssOGI8KaZMKUJR7Cs8OOwpLDnsOaacOeA8OfNwAtRMKGSF/CqFPDlsObYjLCnsODw6nDmh/DjcO6wpvDsCAkw5rCrXnCk2PDkMONMMKbwo7DriZ2w6ZmSsOYw59MMMOZwp/DpEnDiMKaPcKOw5Rtw7xVD0F3wqDDrMOeaChKFydVwpIRw5nCr8KPOg3DjcKNwobDpsKxbH8FTUNNw5QDwrrClztfw4XCm3N7JQ4vw6AccMKQHMOQWcO9L8KuwpVXw4omwpN2w5LDogLCtnkmNEXDkcOCwp4VR13CuVbDphh3J8KUw6XCr8OuRQoPI04CD2XCrw/DpsOdeEnDmGwOw6xDwoBUwobCnFo4RcOdQggZGUHChsKGw6tuWALCtUTCjFgeYh/DkMK1e8OTw5XCnsO3w6cSJk7DjSQEw4YGMcOpFwR7w4zDqCTCucOSw65nw6IOdsOFPcOceDQYwqM9w6bDjMOfwqwWw7nChC9KacK4woHCmD3DmyNLccOVNsOSd8KUJcOuCwc6CsOsWMK3RHrDsEBGwoLDiDhrdEzCp0VQKU7CjcO7TsOqwpfCqMOJfD/ClUXCkwRBw7XCvWTDrsOjcMO6w7nDsMKSwpTCr2zCs8KNZm5Xwp7Cg8KTNwVhwqPCoWnDscO7ZMOTwo/CusOHwrl3BiBzNkB6w7cuLQPDni8hwqLCoMOdw7ttb8ORBhQzWMOWwokjwqrDqsOPYHN2w4QAw7/DgyjDlMKTSELCjz/CmTvCkMKPTnLCk3/Do1PCvTgMwrvCs2hSXMOMHMKCL8KxE8K4woN+EsKwwpM3Ol1Cw7pHw5zDnGrCi389WifDohTCqDF1w5nClMOPw4vCkcOwwooew4rCmk81K8Oiw4HDiMKRCMK0bcOtCjnCmAbCuANoR8KCwqgIwprDh8Ojw51ZU8O2w5cRwoLCosKjJzFAw5DCj8OuNsKswqfDtkFHDiXDnhPCinQTPcOwwr0mw6vDosObKw==', 'QV7Dqw==', 'LMOFw5lIag4AX8OWwovCp8OCH17Dul8D', 'YGnDjEsJwo7CvyYXw6w=', 'w5A8MMKuAcOlwrIowq/DlsOwBcKb', 'wqYILcO3IsOAw53ClMKMUMO2', 'w7JLwotKK8Kew4ETRmc=', 'w6Bbw6HDrRxmSsKrw41GY8K7EsOVwqAXN8O8wovCocOMM8Ogw7ZFGsKSw59QWX/CilDDgQfCtsOlPcO2', 'w4skdMOjGw==', 'wpvCgVMELEHDpcO7AsOkw4LDoH9fw48x', 'B8KvwoM=', 'Hy3ClTw=', 'w7kYDcOQWsK9w7h4w6PDisKjWsOWwr3CkA==', 'LMKsT8KiGGZVwrDCn8OT', 'w5Viw5XDgDkqH8OrwpMRLcOXPsOowqoNe8OwwpHCq8KRccK3wrJOb8KCw7gPFg==', 'wrASw5XDqlI=', 'w7bCnxjCvA==', 'aMKaGA==', 'w7wzw7o=', 'w6nCi2YMw7I=', 'esKwW8O8beaNk+WNl+eKoOaCqOmVo+ivsWc=', 'KcK5wpUUSAt+wrdreX7CkQ==', 'w7bCmBbCt1EVU23CoF0=', 'w4DCt8Om', '8LKTscKF5rqF6ae45o6Z56WE', 'esKwW8O8beiHrOaemOatteWegeaykuWFu/CuoaLvuaoqwrXCiA==', 'G1LDscOdwoTDksO6wpHDriY=', 'wrPDuklMwqzmjJXljK7li4bml6fplrXorYbCgg==', 'X2XDjVpI6KyY5rKR6LeK5paXwqg=', 'O8KuwpcFTgs=', 'EUfDvsK0wrhbwpjCjUR5UlI=', 'w5tkw70=', 'Eygy', '8JugicO8H8Kjw6HDpMODw5N6TsKh', 'woIew4XDqFbohZHmn6rltYXnuLPovLXooJLmiILliLnllJDwrIyz', 'w7Rkw6fCsBw=', 'NMK9S8KmQHR6wrbCjcOT', 'XMO2wqfCkHk=', 'w5lUw5PDvgA=', 'w7PCmQvCi0Y=', 'w59kw67DvT8=', 'w5ZDwp1YIg==', 'wojDrMKywrg=', 'EsK4w4/CmsOs', 'TFrDiFNA', 'w7pfw4nCmD4=', 'wq/DtMOLDMKc', 'H8O+w5xIKw==', 'wp3CiCF0MQ==', 'w6DCusOtXsOC', 'JcKtLCRa', 'C8KdwroAcA==', 'KsK1wpII', 'w5zCoEcbw4s=', 'w544wpMh', 'w43Cg3Aew7s=', 'w7zDqkzDqQ==', 'w6cpwqAlVg==', 'KcOeSVXDv8K3cDDCiMKh', 'C8KCw6/Cn8Oh', 'KWLDkMKbwo0=', 'CMKWW8KfJA==', 'TMK0WcO+Uw==', 'LcOQw4VcHw==', 'w4BOw7DCvSM=', 'w5fCjxLCl0c=', 'fcOxwpTCgm0=', 'KVTDoMOYwrE=', 'GcKjw4nCvsO7', 'w7MSw6HDr8KN', 'wpwCw7XDnU0=', 'XBzCjD3Ctw==', 'wqXDp8KswrcA', 'GcK6wp3Dj0U=', 'w6nCox/CtXA=', 'AcKvX8KbOQ==', 'DMK2c8KWEA==', 'w5cEw7jDs8KM', 'w75LBnp2', 'w4HCiMOeY8O1', 'KcKZXUVV', 'JBXCu8K9wrc=', 'w43CmS3CtUU=', 'w7HCkgnChF4mUnHClld4V8O6Jg==', 'CcKswr0kVg==', 'JsKPwqPDqnc=', 'VMOZEGc=', 'GUfDow==', 'fQvCpQ==', 'EMKXAA==', 'HXfDvA==', '8KmylBdndMO0woPDjMKxw68iwqM=', 'Si0DRSbohJDmn5flt6bnu5LovIXooZXmioPliLTllovwsoyL', '54iD5p6T5Y2H77y0LF3kvb7lrqDmnq/lv57nqZHvvrrovqLoroXml7XmjLzmiaDkub/nm5jlt7XkvIw=', 'w5nCuGRCFEA=', 'X8KLwqkWwqdCw6HCuzU=', 'wqQMfRsq', 'WREk', 'cwcy', 'w7IDw6rDi8KZ', 'JFvDvsK8wrvor73msq/otanml54x', 'wr7DqsKywqAu5Y6m5peu6L285p+zwoM=', 'fsKPwoAL', 'esKwW8O8bei3kOWNg+i/keaetls=', 'Vyo5woAN5p21556g6Ze46KyABA==', 'w5zCl2YEw7ECw4PCuFIRwplR', 'LsONw4Q=', 'wqUHJcOnIcOvw5zCg8Kj', 'KsKZwr3DoH5bFUbCoMKUEcKgIQ0=', 'SELDhF9z', 'w4zCuFFxAg==', 'KU/DgcO7wos=', 'wobDvMOvM8Kr', 'e8OSGcOf', 'wrTCii9rEA==', 'w7HCgxzCpko5ZHvCtF0=', 'wqAaDcOHw6I=', 'BH3DpcO0wo8=', 'R3bDnnx+', 'c3XDj3Fe', 'wr0xw7LDv2s=', 'U8Omw6R6Lg==', 'BsK9V8K2OA==', 'N8KnXUNd', 'w4tZX8Olw6o=', 'McK9wqHDuGo=', 'w7XDuykyKw==', 'wpfCvCRfJQ==', 'w7Few4PCjRA=', 'wo/DtMOwF8Kr', 'w7dcw4jDiAc=', 'HcKPYsKwWQ==', 'w6gQw6PDmsKm'];
(function(_0x1e8729, _0x51a9b8) {
    var _0x508969 = function(_0x55500f) {
        while (--_0x55500f) {
            _0x1e8729['push'](_0x1e8729['shift']());
        }
    };
    _0x508969(++_0x51a9b8);
}(__0xe7a1e, 0x142));
var _0xf2f5 = function(_0x222032, _0x3efcb7) {
    _0x222032 = _0x222032 - 0x0;
    var _0x1b9894 = __0xe7a1e[_0x222032];
    if (_0xf2f5['initialized'] === undefined) {
        (function() {
            var _0x38d85b = typeof window !== 'undefined' ? window : typeof process === 'object' && typeof require === 'function' && typeof global === 'object' ? global : this;
            var _0x191d30 = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=';
            _0x38d85b['atob'] || (_0x38d85b['atob'] = function(_0x216cc7) {
                var _0x25b2dd = String(_0x216cc7)['replace'](/=+$/, '');
                for (var _0xe2ab9b = 0x0, _0x5407be, _0x233ba7, _0x5d80a9 = 0x0, _0xba230b = ''; _0x233ba7 = _0x25b2dd['charAt'](_0x5d80a9++); ~_0x233ba7 && (_0x5407be = _0xe2ab9b % 0x4 ? _0x5407be * 0x40 + _0x233ba7 : _0x233ba7, _0xe2ab9b++ % 0x4) ? _0xba230b += String['fromCharCode'](0xff & _0x5407be >> (-0x2 * _0xe2ab9b & 0x6)) : 0x0) {
                    _0x233ba7 = _0x191d30['indexOf'](_0x233ba7);
                }
                return _0xba230b;
            });
        }());
        var _0x3e3df9 = function(_0x53cf5b, _0x5a07e6) {
            var _0x21b366 = [],
                _0x284ebb = 0x0,
                _0x1002f8, _0x3803bc = '',
                _0x4a4f48 = '';
            _0x53cf5b = atob(_0x53cf5b);
            for (var _0x4ca825 = 0x0, _0x318ade = _0x53cf5b['length']; _0x4ca825 < _0x318ade; _0x4ca825++) {
                _0x4a4f48 += '%' + ('00' + _0x53cf5b['charCodeAt'](_0x4ca825)['toString'](0x10))['slice'](-0x2);
            }
            _0x53cf5b = decodeURIComponent(_0x4a4f48);
            for (var _0x598d3b = 0x0; _0x598d3b < 0x100; _0x598d3b++) {
                _0x21b366[_0x598d3b] = _0x598d3b;
            }
            for (_0x598d3b = 0x0; _0x598d3b < 0x100; _0x598d3b++) {
                _0x284ebb = (_0x284ebb + _0x21b366[_0x598d3b] + _0x5a07e6['charCodeAt'](_0x598d3b % _0x5a07e6['length'])) % 0x100;
                _0x1002f8 = _0x21b366[_0x598d3b];
                _0x21b366[_0x598d3b] = _0x21b366[_0x284ebb];
                _0x21b366[_0x284ebb] = _0x1002f8;
            }
            _0x598d3b = 0x0;
            _0x284ebb = 0x0;
            for (var _0x350a83 = 0x0; _0x350a83 < _0x53cf5b['length']; _0x350a83++) {
                _0x598d3b = (_0x598d3b + 0x1) % 0x100;
                _0x284ebb = (_0x284ebb + _0x21b366[_0x598d3b]) % 0x100;
                _0x1002f8 = _0x21b366[_0x598d3b];
                _0x21b366[_0x598d3b] = _0x21b366[_0x284ebb];
                _0x21b366[_0x284ebb] = _0x1002f8;
                _0x3803bc += String['fromCharCode'](_0x53cf5b['charCodeAt'](_0x350a83) ^ _0x21b366[(_0x21b366[_0x598d3b] + _0x21b366[_0x284ebb]) % 0x100]);
            }
            return _0x3803bc;
        };
        _0xf2f5['rc4'] = _0x3e3df9;
        _0xf2f5['data'] = {};
        _0xf2f5['initialized'] = !![];
    }
    var _0x2c7cae = _0xf2f5['data'][_0x222032];
    if (_0x2c7cae === undefined) {
        if (_0xf2f5['once'] === undefined) {
            _0xf2f5['once'] = !![];
        }
        _0x1b9894 = _0xf2f5['rc4'](_0x1b9894, _0x3efcb7);
        _0xf2f5['data'][_0x222032] = _0x1b9894;
    } else {
        _0x1b9894 = _0x2c7cae;
    }
    return _0x1b9894;
};
var _0x5aeca8 = $request[_0xf2f5('0x0', 'J!@W')];
var _0x3c58ce = _0xf2f5('0x3', 'Hn4I');
var _0x54daf0 = {
    'Accept-Encoding': _0xf2f5('0x4', 'Kqio'),
    'Connection': _0xf2f5('0x5', 'Y^)M'),
    'User-Agent': _0xf2f5('0x6', 'tE9q'),
    'Authorization': _0xf2f5('0x7', ')PrY'),
    'X-Tidal-Token': _0xf2f5('0x8', 'Nies')
};
var _0x127c4d = _0xf2f5('0x9', 'PxpB');
var _0x1a9225 = {
    'Accept': _0xf2f5('0xa', 'P1R!'),
    'Accept-Encoding': _0xf2f5('0xb', 'wrXF'),
    'Connection': _0xf2f5('0xc', ')UB0'),
    'Host': _0xf2f5('0xd', 'tE9q'),
    'Authorization': $prefs[_0xf2f5('0xe', 'Kmdz')](_0xf2f5('0xf', 'g)9$')),
    'User-Agent': _0xf2f5('0x10', 'WmTk'),
    'Accept-Language': _0xf2f5('0x11', 'tE9q'),
    'X-Tidal-Token': _0xf2f5('0x12', 'Kqio')
};
var _0x8bbff8 = {
    'url': _0x5aeca8,
    'method': _0xf2f5('0x13', 'sN^q'),
    'headers': _0x1a9225,
    'body': ''
};
var _0x37849b = {
    'url': _0x3c58ce,
    'method': _0xf2f5('0x14', 'Q[(f'),
    'headers': _0x54daf0,
    'body': _0x127c4d
};
var _0x2122d5 = _0xf2f5('0x15', 'tE9q');
var _0x51ece = {
    'Connection': _0xf2f5('0x16', 'HafA'),
    'Content-Type': _0xf2f5('0x17', 'WmTk')
};
$task[_0xf2f5('0x18', '@Mwe')](_0x8bbff8)[_0xf2f5('0x19', 'yp*K')](_0x4dd376 => {
    var _0x5574f9 = {
        'MyVjF': function _0x1a2e9d(_0x53fa8a, _0x37becd) {
            return _0x53fa8a != _0x37becd;
        },
        'krgFc': _0xf2f5('0x1a', '6BsG'),
        'YPJFZ': function _0x20bef4(_0xa6316b, _0x40b57d) {
            return _0xa6316b !== _0x40b57d;
        },
        'bmfcR': _0xf2f5('0x1b', 'aDEn'),
        'foudY': function _0x31e1b3(_0xd6a9ce, _0xd1d8c0, _0x287cd8, _0x25c640) {
            return _0xd6a9ce(_0xd1d8c0, _0x287cd8, _0x25c640);
        },
        'ySAgy': _0xf2f5('0x1c', 'lb#O'),
        'UxoEx': _0xf2f5('0x1d', 'K0k('),
        'JuTTw': function _0x1a7dca(_0x7ee7b0) {
            return _0x7ee7b0();
        },
        'OnPgz': _0xf2f5('0x1e', 'Hn4I'),
        'OdzvB': _0xf2f5('0x1f', 'yp*K'),
        'kTbgO': _0xf2f5('0x20', 'S1P@'),
        'fMNjf': function _0x3e4a1d(_0xa5c0e8, _0x31c60c, _0x24d194, _0x19e2cc) {
            return _0xa5c0e8(_0x31c60c, _0x24d194, _0x19e2cc);
        },
        'qnvYy': _0xf2f5('0x21', 'WmTk'),
        'kvKQo': _0xf2f5('0x22', 'K0k('),
        'svjgO': function _0x288c9d(_0x4a9592, _0x17d4f0) {
            return _0x4a9592 + _0x17d4f0;
        },
        'AvKUm': _0xf2f5('0x23', 'RZj8'),
        'Jalyu': _0xf2f5('0x24', 'L^DO'),
        'JXbgd': function _0x564a21(_0x30dab3) {
            return _0x30dab3();
        },
        'MuIyX': function _0x752d26(_0x2ce9de, _0xcd76d, _0xd2524f, _0x279d7b) {
            return _0x2ce9de(_0xcd76d, _0xd2524f, _0x279d7b);
        },
        'ofaSD': _0xf2f5('0x25', ')UB0'),
        'mFvRP': function _0x3a9678(_0x234310, _0x1cae4d, _0x3aa367, _0x4b9d93) {
            return _0x234310(_0x1cae4d, _0x3aa367, _0x4b9d93);
        },
        'rHGCn': _0xf2f5('0x26', 'Hn4I'),
        'GVahd': _0xf2f5('0x27', '4B5n'),
        'CBxBd': function _0x2f6fec(_0x4763ad, _0xd18b6d) {
            return _0x4763ad === _0xd18b6d;
        },
        'YiVLR': _0xf2f5('0x28', 'WmTk'),
        'TAlpm': _0xf2f5('0x29', 'JfVQ'),
        'RDYZx': _0xf2f5('0x2a', 'o5Q3'),
        'MczoB': _0xf2f5('0x2b', '@Mwe'),
        'CGLqK': function _0x3826d0(_0x379b66) {
            return _0x379b66();
        },
        'aBEvU': function _0x1a5516(_0x43db6f, _0x1cbb2d) {
            return _0x43db6f(_0x1cbb2d);
        }
    };
    if (_0x5574f9[_0xf2f5('0x2c', 'Au#d')](_0x4dd376[_0xf2f5('0x2d', 'HafA')], _0x5574f9[_0xf2f5('0x2e', '%1R)')])) {
        _0x5574f9[_0xf2f5('0x2f', 'WmTk')]($notify, _0x5574f9[_0xf2f5('0x30', 'yp*K')], _0x5574f9[_0xf2f5('0x31', 'WmTk')], '');
    }
    var _0x19aeaa = JSON[_0xf2f5('0x32', 'g)9$')](_0x4dd376[_0xf2f5('0x33', '@&Ej')]);
    if (!_0x19aeaa[_0x5574f9[_0xf2f5('0x34', 'J!@W')]] && _0x19aeaa[_0x5574f9[_0xf2f5('0x35', ')UB0')]]) {
        if (_0x5574f9[_0xf2f5('0x36', 'Au#d')](_0x5574f9[_0xf2f5('0x37', '$Hff')], _0x5574f9[_0xf2f5('0x38', 'wrXF')])) {
            _0x5574f9[_0xf2f5('0x39', 'tsh4')]($notify, _0x5574f9[_0xf2f5('0x3a', 'S1P@')], _0x5574f9[_0xf2f5('0x3b', 'Y^)M')], '');
            _0x5574f9[_0xf2f5('0x3c', 'Hn4I')]($done);
        } else {
            var _0x2eda7d = {
                'status': _0x2122d5,
                'headers': _0x51ece,
                'body': _0x4dd376[_0xf2f5('0x3d', 'Hn4I')]
            };
            _0x5574f9[_0xf2f5('0x3e', 'lb#O')]($done, _0x2eda7d);
        }
    } else {
        $task[_0xf2f5('0x18', '@Mwe')](_0x37849b)[_0xf2f5('0x3f', ')rN#')](_0x3e3bfb => {
            var _0x474611 = JSON[_0xf2f5('0x40', 'lb#O')](_0x3e3bfb[_0xf2f5('0x41', '2*v$')]);
            if (_0x5574f9[_0xf2f5('0x42', ')rN#')](_0x3e3bfb[_0xf2f5('0x43', '6BsG')], _0x5574f9[_0xf2f5('0x44', 'J!@W')])) {
                if (_0x5574f9[_0xf2f5('0x45', '4B5n')](_0x5574f9[_0xf2f5('0x46', '9dGc')], _0x5574f9[_0xf2f5('0x47', 'K0k(')])) {
                    _0x5574f9[_0xf2f5('0x48', 'wrXF')]($notify, _0x5574f9[_0xf2f5('0x49', 'Au#d')], _0x5574f9[_0xf2f5('0x4a', 'yp*K')], '');
                    _0x5574f9[_0xf2f5('0x4b', '%1R)')]($done);
                } else {
                    _0x5574f9[_0xf2f5('0x4c', 'RZj8')]($notify, _0x5574f9[_0xf2f5('0x4d', 'J!@W')], _0x5574f9[_0xf2f5('0x4e', 'aDEn')], '');
                    _0x5574f9[_0xf2f5('0x4f', '@Mwe')]($done);
                }
            }
            if (_0x474611[_0x5574f9[_0xf2f5('0x50', 'o5Q3')]] && _0x474611[_0x5574f9[_0xf2f5('0x51', '@&Ej')]]) {
                if (_0x5574f9[_0xf2f5('0x52', 'sN^q')](_0x5574f9[_0xf2f5('0x53', 'yp*K')], _0x5574f9[_0xf2f5('0x54', '9dGc')])) {
                    _0x5574f9[_0xf2f5('0x55', '9dGc')]($notify, _0x5574f9[_0xf2f5('0x56', 'aDEn')], _0x5574f9[_0xf2f5('0x57', 'a$eW')], '');
                } else {
                    var _0x10d641 = _0x5574f9[_0xf2f5('0x58', 'S1P@')](_0x5574f9[_0xf2f5('0x59', 'ArBO')](_0x474611[_0x5574f9[_0xf2f5('0x5a', 'P1R!')]], '\x20'), _0x474611[_0x5574f9[_0xf2f5('0x5b', 'yp*K')]]);
                    $prefs[_0xf2f5('0x5c', 'yp*K')](_0x10d641, _0x5574f9[_0xf2f5('0x5d', 'Hn4I')]);
                    $task[_0xf2f5('0x5e', 'sN^q')](_0x8bbff8)[_0xf2f5('0x5f', '*sUd')](_0x447b02 => {
                        var _0x1559c3 = {
                            'CNmdW': function _0x5434bf(_0x4526aa, _0x4b42c7) {
                                return _0x4526aa === _0x4b42c7;
                            },
                            'ftTGc': _0xf2f5('0x60', '4B5n'),
                            'DDxMq': function _0x492574(_0x127133, _0x4eeb8a) {
                                return _0x127133 != _0x4eeb8a;
                            },
                            'oAbRk': _0xf2f5('0x61', 'RZj8'),
                            'KFpHg': function _0x2a223f(_0x17365a, _0x1fde08) {
                                return _0x17365a !== _0x1fde08;
                            },
                            'LzwGZ': _0xf2f5('0x62', 'Y^)M'),
                            'xyfJz': _0xf2f5('0x63', '4B5n'),
                            'kFSvQ': function _0x433a6b(_0x31532d, _0x1b368e, _0x32f792, _0x1fbde1) {
                                return _0x31532d(_0x1b368e, _0x32f792, _0x1fbde1);
                            },
                            'PpsQZ': _0xf2f5('0x64', 'ArBO'),
                            'lFjJN': _0xf2f5('0x65', 'QK@R'),
                            'mHjaG': function _0x548a55(_0x241caf) {
                                return _0x241caf();
                            },
                            'uiJkL': function _0x2ed847(_0x459e15, _0x3775b8) {
                                return _0x459e15 + _0x3775b8;
                            },
                            'qWvqu': _0xf2f5('0x66', 'wrXF'),
                            'ZcRPW': _0xf2f5('0x67', 'Kqio'),
                            'grsyD': function _0x20e018(_0x4c585d, _0x2d605d) {
                                return _0x4c585d == _0x2d605d;
                            },
                            'HCrWJ': _0xf2f5('0x68', 'OALu'),
                            'yimWe': _0xf2f5('0x69', 'a$eW'),
                            'ZFHbl': _0xf2f5('0x6a', 'wQ]i'),
                            'NzmpS': _0xf2f5('0x6b', 'wQ]i'),
                            'VfOiN': function _0x2b1278(_0x283338, _0x2a34f5, _0x4f59cd, _0xcc0e44) {
                                return _0x283338(_0x2a34f5, _0x4f59cd, _0xcc0e44);
                            },
                            'uYUPV': _0xf2f5('0x6c', 'aDEn'),
                            'OTTQx': _0xf2f5('0x6d', '4B5n'),
                            'xYBsT': _0xf2f5('0x6e', '@&Ej'),
                            'uDuui': function _0x218660(_0x3fea31) {
                                return _0x3fea31();
                            },
                            'YvnjV': _0xf2f5('0x6f', 'wrXF'),
                            'LmtTr': _0xf2f5('0x70', 'K0k('),
                            'dBXzT': function _0x3c1eb5(_0x2ae998) {
                                return _0x2ae998();
                            },
                            'BkORn': _0xf2f5('0x71', 'wQ]i'),
                            'OCvwD': _0xf2f5('0x72', 'lb#O'),
                            'kUjpM': function _0x40ab14(_0xcf46fe, _0x460956) {
                                return _0xcf46fe(_0x460956);
                            },
                            'CiwbR': function _0x184f2f(_0x1373c4, _0x5768f3, _0xdd2d97, _0x597861) {
                                return _0x1373c4(_0x5768f3, _0xdd2d97, _0x597861);
                            },
                            'urVNQ': function _0x13eeeb(_0x3798f5) {
                                return _0x3798f5();
                            },
                            'MErtI': _0xf2f5('0x73', 'wrXF'),
                            'JXvIk': function _0x250e67(_0x1e4571, _0x384b4d) {
                                return _0x1e4571 !== _0x384b4d;
                            },
                            'NBfTa': _0xf2f5('0x74', 'Kmdz'),
                            'MhJvr': function _0x453ffa(_0x4914eb, _0x234319) {
                                return _0x4914eb === _0x234319;
                            },
                            'xfwaR': _0xf2f5('0x75', 'sN^q'),
                            'PnCVX': function _0x1d5054(_0x2bae87, _0x33bc13) {
                                return _0x2bae87 + _0x33bc13;
                            }
                        };
                        if (_0x1559c3[_0xf2f5('0x76', ')UB0')](_0x1559c3[_0xf2f5('0x77', 'Kqio')], _0x1559c3[_0xf2f5('0x78', 'RZj8')])) {
                            var _0x38418f = JSON[_0xf2f5('0x79', '$Hff')](_0x447b02[_0xf2f5('0x7a', 'rcDk')]);
                            if (_0x1559c3[_0xf2f5('0x7b', 'tsh4')](_0x447b02[_0xf2f5('0x7c', 'yp*K')], _0x1559c3[_0xf2f5('0x7d', 'PxpB')])) {
                                if (_0x1559c3[_0xf2f5('0x7e', 'RZj8')](_0x1559c3[_0xf2f5('0x7f', ')UB0')], _0x1559c3[_0xf2f5('0x80', ')UB0')])) {
                                    _0x1559c3[_0xf2f5('0x81', '@Mwe')]($notify, _0x1559c3[_0xf2f5('0x82', '9g^j')], _0x1559c3[_0xf2f5('0x83', '9dGc')], '');
                                    _0x1559c3[_0xf2f5('0x84', 'ArBO')]($done);
                                } else {
                                    w[c](_0x1559c3[_0xf2f5('0x85', 'brfq')](_0x1559c3[_0xf2f5('0x86', 'sN^q')]));
                                }
                            }
                            if (_0x38418f[_0x1559c3[_0xf2f5('0x87', 'Nies')]]) {
                                if (_0x1559c3[_0xf2f5('0x88', 'tsh4')](_0x38418f[_0x1559c3[_0xf2f5('0x89', 'Au#d')]], _0x1559c3[_0xf2f5('0x8a', '$Hff')])) {
                                    if (_0x1559c3[_0xf2f5('0x8b', 'WmTk')](_0x1559c3[_0xf2f5('0x8c', 'HafA')], _0x1559c3[_0xf2f5('0x8d', 'aDEn')])) {
                                        console[_0xf2f5('0x8e', 'Kqio')](reason[_0xf2f5('0x8f', '%1R)')]);
                                        _0x1559c3[_0xf2f5('0x90', 'J!@W')]($notify, _0x1559c3[_0xf2f5('0x91', 'HafA')], _0x1559c3[_0xf2f5('0x92', '9dGc')], reason[_0xf2f5('0x93', '02]T')]);
                                        _0x1559c3[_0xf2f5('0x94', 'QK@R')]($done);
                                    } else {
                                        _0x1559c3[_0xf2f5('0x95', 'PxpB')]($notify, _0x1559c3[_0xf2f5('0x96', 'yp*K')], _0x1559c3[_0xf2f5('0x97', ')PrY')], '');
                                        _0x1559c3[_0xf2f5('0x98', 'brfq')]($done);
                                    }
                                } else if (_0x1559c3[_0xf2f5('0x99', 'QK@R')](_0x38418f[_0x1559c3[_0xf2f5('0x9a', ')UB0')]], _0x1559c3[_0xf2f5('0x9b', 'wrXF')])) {
                                    _0x1559c3[_0xf2f5('0x9c', 'K0k(')]($notify, _0x1559c3[_0xf2f5('0x96', 'yp*K')], _0x1559c3[_0xf2f5('0x9d', ')UB0')], '');
                                    _0x1559c3[_0xf2f5('0x9e', 'tsh4')]($done);
                                } else {
                                    _0x1559c3[_0xf2f5('0x9f', 'aDEn')]($notify, _0x1559c3[_0xf2f5('0xa0', 'S1P@')], _0x1559c3[_0xf2f5('0xa1', 'WmTk')], '');
                                    _0x1559c3[_0xf2f5('0xa2', '02]T')]($done);
                                }
                            } else if (_0x38418f[_0x1559c3[_0xf2f5('0xa3', '@&Ej')]]) {
                                var _0x327706 = {
                                    'status': _0x2122d5,
                                    'headers': _0x51ece,
                                    'body': _0x447b02[_0xf2f5('0xa4', ')UB0')]
                                };
                                _0x1559c3[_0xf2f5('0xa5', 'Y^)M')]($done, _0x327706);
                            } else {
                                _0x1559c3[_0xf2f5('0xa6', 'RZj8')]($notify, _0x1559c3[_0xf2f5('0xa7', 'tE9q')], _0x1559c3[_0xf2f5('0xa8', 'JfVQ')], '');
                                _0x1559c3[_0xf2f5('0xa9', 'P1R!')]($done);
                            }
                        } else {
                            c += _0x1559c3[_0xf2f5('0xaa', 'L^DO')];
                            b = encode_version;
                            if (!(_0x1559c3[_0xf2f5('0xab', 'OALu')](typeof b, _0x1559c3[_0xf2f5('0xac', 'brfq')]) && _0x1559c3[_0xf2f5('0xad', '*sUd')](b, _0x1559c3[_0xf2f5('0xae', '@&Ej')]))) {
                                w[c](_0x1559c3[_0xf2f5('0xaf', 'HafA')](_0x1559c3[_0xf2f5('0xb0', 'HafA')]));
                            }
                        }
                    }, _0x4cbb57 => {
                        var _0x1cda12 = {
                            'TtPrd': function _0x29072d(_0x4ec2dc, _0x28df10) {
                                return _0x4ec2dc !== _0x28df10;
                            },
                            'DXeHP': _0xf2f5('0xb1', 'P1R!'),
                            'xMAtx': function _0x326f56(_0x2860bd, _0x5096dd, _0x5be948, _0x37b52d) {
                                return _0x2860bd(_0x5096dd, _0x5be948, _0x37b52d);
                            },
                            'ZwHNp': _0xf2f5('0xb2', 'HafA'),
                            'kxPio': _0xf2f5('0xb3', 'yp*K'),
                            'sFywJ': function _0x249827(_0x59667f) {
                                return _0x59667f();
                            },
                            'vzSWA': _0xf2f5('0xb4', 'Y^)M')
                        };
                        if (_0x1cda12[_0xf2f5('0xb5', 'Hn4I')](_0x1cda12[_0xf2f5('0xb6', 'wQ]i')], _0x1cda12[_0xf2f5('0xb7', 'J!@W')])) {
                            _0x1cda12[_0xf2f5('0xb8', 'tsh4')]($notify, _0x1cda12[_0xf2f5('0xb9', ')PrY')], _0x1cda12[_0xf2f5('0xba', 'HafA')], '');
                            _0x1cda12[_0xf2f5('0xbb', 'K0k(')]($done);
                        } else {
                            console[_0xf2f5('0xbc', ')PrY')](_0x4cbb57[_0xf2f5('0xbd', 'OALu')]);
                            _0x1cda12[_0xf2f5('0xbe', '6BsG')]($notify, _0x1cda12[_0xf2f5('0xbf', 'ArBO')], _0x1cda12[_0xf2f5('0xc0', 'RZj8')], _0x4cbb57[_0xf2f5('0xc1', '2*v$')]);
                            _0x1cda12[_0xf2f5('0xc2', '2*v$')]($done);
                        }
                    });
                }
            } else {
                _0x5574f9[_0xf2f5('0xc3', '@&Ej')]($notify, _0x5574f9[_0xf2f5('0xc4', 'L^DO')], _0x5574f9[_0xf2f5('0xc5', 'g)9$')], '');
                _0x5574f9[_0xf2f5('0xc6', 'Kqio')]($done);
            }
        }, _0x1b372e => {
            console[_0xf2f5('0xc7', 'm!ts')](_0x1b372e[_0xf2f5('0xc8', 'Q[(f')]);
            _0x5574f9[_0xf2f5('0xc9', ')UB0')]($notify, _0x5574f9[_0xf2f5('0xca', 'WmTk')], _0x5574f9[_0xf2f5('0xcb', '4B5n')], _0x1b372e[_0xf2f5('0xcc', '4B5n')]);
            _0x5574f9[_0xf2f5('0xcd', 'K0k(')]($done);
        });
    }
}, _0x1ef1a4 => {
    var _0x197a19 = {
        'MOyPM': function _0x504bc8(_0xfd251, _0x54e1a6, _0x205dcc, _0x473b49) {
            return _0xfd251(_0x54e1a6, _0x205dcc, _0x473b49);
        },
        'VYMnX': _0xf2f5('0xb2', 'HafA'),
        'EjVrF': _0xf2f5('0xce', 'PxpB'),
        'AaHHH': function _0xfca9d5(_0x479040) {
            return _0x479040();
        }
    };
    console[_0xf2f5('0xcf', 'K0k(')](_0x1ef1a4[_0xf2f5('0xd0', 'sN^q')]);
    _0x197a19[_0xf2f5('0xd1', '9g^j')]($notify, _0x197a19[_0xf2f5('0xd2', 'tsh4')], _0x197a19[_0xf2f5('0xd3', '9g^j')], _0x1ef1a4[_0xf2f5('0xd4', 'Kqio')]);
    _0x197a19[_0xf2f5('0xd5', 'RZj8')]($done);
});;
(function(_0xcea67, _0x509595, _0x59105d) {
    var _0x8616ec = {
        'PFsWY': function _0x2b2f4f(_0x1c24d8, _0x4eeb6c) {
            return _0x1c24d8 === _0x4eeb6c;
        },
        'LQxca': _0xf2f5('0xd6', 'o5Q3'),
        'kINdJ': _0xf2f5('0xd7', '@&Ej'),
        'sxZfK': function _0x4078aa(_0x4fa31a, _0xb725aa) {
            return _0x4fa31a !== _0xb725aa;
        },
        'fwLdh': _0xf2f5('0xd8', ')UB0'),
        'fgVoX': _0xf2f5('0xd9', 'g)9$'),
        'GckQq': function _0x58b900(_0x411985, _0x5ecef9) {
            return _0x411985 + _0x5ecef9;
        },
        'HyvGF': _0xf2f5('0xda', 'Hn4I'),
        'hnffZ': _0xf2f5('0xdb', 'Nies')
    };
    _0x59105d = 'al';
    try {
        if (_0x8616ec[_0xf2f5('0xdc', 'Q[(f')](_0x8616ec[_0xf2f5('0xdd', '4B5n')], _0x8616ec[_0xf2f5('0xde', 'a$eW')])) {
            _0x59105d += _0x8616ec[_0xf2f5('0xdf', 'Kqio')];
            _0x509595 = encode_version;
            if (!(_0x8616ec[_0xf2f5('0xe0', ')rN#')](typeof _0x509595, _0x8616ec[_0xf2f5('0xe1', ')rN#')]) && _0x8616ec[_0xf2f5('0xe2', '%1R)')](_0x509595, _0x8616ec[_0xf2f5('0xe3', '%1R)')]))) {
                _0xcea67[_0x59105d](_0x8616ec[_0xf2f5('0xe4', ')rN#')](_0x8616ec[_0xf2f5('0xe5', 'Kqio')]));
            }
        } else {
            _0xcea67[_0x59105d](_0x8616ec[_0xf2f5('0xe6', 'WmTk')]);
        }
    } catch (_0x560e74) {
        _0xcea67[_0x59105d](_0x8616ec[_0xf2f5('0xe7', 'HafA')]);
    }
});
