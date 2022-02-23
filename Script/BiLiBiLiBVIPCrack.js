/*
 *
 *
脚本功能：哔哩哔哩解锁大会员
软件版本：6.58.0
下载地址：http://t.cn/AiOqwnn1
脚本作者：Hausd0rff
更新时间：2022-01-18
脚本发布：https://t.me/yqc_123
问题反馈：https://t.me/yqc_777
使用声明：⚠️此脚本仅供学习与交流，
        请勿转载与贩卖！⚠️⚠️⚠️
*******************************

[rewrite_local]

# > 哔哩哔哩解锁大会员
^https?:\/\/ap(i|p)\.bilibili\.com\/bilibili\.\w{3,4}\..+\/(View|PlayView|PlayConf|PlayerOnline|MainList|ViewProgress)$ url script-request-header https://raw.githubusercontent.com/yqc007/QuantumultX/master/Script/BiLiBiLiBVIPCrack.js

[mitm] 

hostname = *.bili*.*, 124.239.240.*, 101.89.57.66, 218.94.210.66, 240e:b1:9801:206:11:0:0:*
*
*
*/


var encode_version = 'hausd0rff',
    hirft = '__0xd7f14',
    __0xd7f14 = ['ZMOUZkQi', 'w6/Dn8KZTAU=', 'K8Ocw54lGQ==', 'wrzCn8Kiw7TCsg==', 'w77DlMO6w6bCig==', 'wpDDlsKzZ0I=', 'Q1VuwrgEw4kj', 'w5zCuS3Cn3vDhg==', 'wqfCpMOGHMKIT8Ofwp3CksK1w4PDk8KzVcODL17CiMOTAid0HjjCrm7CicOVwrfDhsKVPMOMPcO0w4x6wrQ+LcKDAhfDgsOmaGvDicOaKmlEwo0OKsOTwptbw4AXQ8KnOFkiw502w4xcGX7CuMKVw68pw7t6wq5yfH7CrMKkwrB7JMKaU8KYwo0ywofCucODwrIEEcKJwohpwrVRIcKQC0lHRA9Hw7Q6wozClMK6w45yWcO5w7bDu3fDviNuw7/Ciicxw6Mew6wDwrLDpsOOPMOfw5TCssKVwoVdw5rCvh92wqNmw7HDiMOWwr7DlcOMwrTDrsK6w7vCgMOFYsKpwozCtsKwwozCjMO/LsOzSMOOw67Dp8KiAn7DkAwQJh08w57CvRjCmVjCnBYkw4VcwqbCvEnCoGk4woAzwoRpMMOdXcOdwo/Dv8KVwow4C3MBAsOoNwNBw4AMC2F7wrvCh8OSF8KRw77CusO+w4MJw589d8OUwpt6SE7CsRQ1dHPDi8OdHVgRJsKSwrE+M8Ooc8KCQhHCicK5wrsaXnXCpW3Cvj7CtTUPwpdxwqnCg1PCk8O1w55YV0bDscOqJsKww4nDiMKqdwx0LsORwq3CuBDDmUDCvzl9wrfCgMOB', 'aQzCpMOBOMKkw43CtHHChVg4aw==', 'wpHCtcOWG8KYG8KNwqXDvsKAwrfDisKWAcOfKgrChsObGVUmHBzDoTvCgcO2w4bCjsK3bcOMG8O5wpsuwrY9WsOUdRDDgA==', 'wq3CosOWB8OBM8KMwrnDj8KC', 'JVPCgMO4w5fCh0LDkErDhMKgccO4wo1Rw7TDqsKowrLDk8OQwqvDt8KIw4gFEcKPw4LDjS7DtcK1HsOywolsw5UBw6/CjMOGDMOSdcOpPznCtMKew50GLAjCoS9LGDFjw4hJJcKqBSbCr31lT8OAwpPCnQ/DuQldV8KeHcORwqc1', 'LTh5w7/CgcKTw6rDp8OgwqYrw4FWw5DCk8K+cg==', 'X8OWw5fCjcKzc2l0wr/Ci8KkXyjCtsKSXgDCqcKAXSAow5vCmw==', 'TsKwfUgJbQUyDhRUQTfCs1zCtsKS', 'w5zClwfCpSfDs8K2QzDDuVTDoz0NRcK5dTR+wqZVUsOawpPDrBjDg8KeTMODEcOQJsK5OnzDiMKgTcKteFQwD8OMMsO5wqfDsMOZw4BxAyIFwqXDjyDDjWN3YsKZVVh3wqrDm8OFH8K+WcOhwr8pw5/DlcOww4tYG8OZIMOXBnDCvQvCpcOnRMOaFT4vwrjDmEnCocKUBGLDuzIsS8KWw5nCrMOAUDfCvsKSwq3DucKaXEVFC8Oyc8KMcG4RwoEfX3PCrsOvSMKSwqbDhcO8wrw2cEzDp1nCplnDq0zDtMKuVGlsw7QRR8O1D8Kdw5VmQnJew4bDhMKVwrnCvcKGN2nCn8OjwrU7w5EuVkE8eE9wTgo1LcOowrbCtCfDm8O7w5vCgnXCp8OWw6HDhMO0w6lDw4QPwoEpw5LDnMOwb8Oyw57CnjDCk8OIw6vDvxDCocOzw6lBJ8OkUsKTfcKlwrMmUkvDvQ==', 'w6zDvyMyw5fDtsOIw5V7w4jDsnDDpMO0OCEywqIq', 'GMOvw5kcFMOuTMO2VBcfWcKTw69uwrnDm8KMwrk6E10IwrRbQcKRwplwD8KDIcOBYcOCA8O4w5jCkMKxFxJYcA/CnMOgwpXCvCXCrDTDsEDDiRleb8OefnLCuW/Ci8Oiw6YaJcO6w5hVw6rDr8KYYEjDiMO3wpjCqEdsF1fDpMKtEsKtwp7Cp8KBWBFSw50kTRFJw71twpTDv8K/JcKBw7jCi8Kpw6JmbkkEZBEUYcKUHHDDjMKFBAhcGsK0IMOxdmLDuz/Dn8OtLsOdw7DDiw==', 'AcO5OiPDvGXDvcKLwq5Fw5RPQMO3fkxhccOBwqTDpw==', 'wpLDusKkwqnCnTgBHcOgb25Iw4Vfw7tvw4nDmsOYw5BxAcK3woLDglXDhMOMKGnDisOA', 'PyQj', 'w7vCosOOcS0Wf3dC', 'fMOUOsKDQcOHAcOcwqPDmcOYDcOFw5c=', '54m95p2f5Y6G776Zw6rDu+S+nOWsmuadqOW9s+eqi+++sui9geithOaUsuaOq+aJo+S4peebveW0m+S+pQ==', '5Yi26ZuD54iY5p+G5Y+X776mAsKB5L+a5ays5p6q5bya56ik', 'fQfDkQsH', 'WjDDsDgB'];
(function(_0x1656b1, _0x553945) {
    var _0x19f4a6 = function(_0x27bca0) {
        while (--_0x27bca0) {
            _0x1656b1['push'](_0x1656b1['shift']());
        }
    };
    _0x19f4a6(++_0x553945);
}(__0xd7f14, 0x92));
$notify("\x3e \u8be5\u811a\u672c\u5df2\u6682\u65f6\u88ab\u548c\u8c10\ud83d\ude05","\x3e \u5173\u6ce8\u4f5c\u8005\x54\x47\u9891\u9053\uff1a\u83b7\u53d6\u66f4\u65b0\u901a\u77e5\u2705","\x3e \x68\x74\x74\x70\x73\x3a\x2f\x2f\x74\x2e\x6d\x65\x2f\x79\x71\x63\x5f\x31\x32\x33");
var _0x14e7 = function(_0x808430, _0x4b9278) {
    _0x808430 = _0x808430 - 0x0;
    var _0x469775 = __0xd7f14[_0x808430];
    if (_0x14e7['initialized'] === undefined) {
        (function() {
            var _0x2e51f9 = typeof window !== 'undefined' ? window : typeof process === 'object' && typeof require === 'function' && typeof global === 'object' ? global : this;
            var _0x1c1cc3 = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=';
            _0x2e51f9['atob'] || (_0x2e51f9['atob'] = function(_0x35b612) {
                var _0x2e37e3 = String(_0x35b612)['replace'](/=+$/, '');
                for (var _0x29016f = 0x0, _0x1d0ba3, _0x203a3a, _0x5c16cb = 0x0, _0x3f029c = ''; _0x203a3a = _0x2e37e3['charAt'](_0x5c16cb++); ~_0x203a3a && (_0x1d0ba3 = _0x29016f % 0x4 ? _0x1d0ba3 * 0x40 + _0x203a3a : _0x203a3a, _0x29016f++ % 0x4) ? _0x3f029c += String['fromCharCode'](0xff & _0x1d0ba3 >> (-0x2 * _0x29016f & 0x6)) : 0x0) {
                    _0x203a3a = _0x1c1cc3['indexOf'](_0x203a3a);
                }
                return _0x3f029c;
            });
        }());
        var _0x4bcefb = function(_0x26dc32, _0x4414fe) {
            var _0x43ac19 = [],
                _0x24c09c = 0x0,
                _0xdcc45b, _0x348a4f = '',
                _0x492437 = '';
            _0x26dc32 = atob(_0x26dc32);
            for (var _0xa3e4c = 0x0, _0x5182ff = _0x26dc32['length']; _0xa3e4c < _0x5182ff; _0xa3e4c++) {
                _0x492437 += '%' + ('00' + _0x26dc32['charCodeAt'](_0xa3e4c)['toString'](0x10))['slice'](-0x2);
            }
            _0x26dc32 = decodeURIComponent(_0x492437);
            for (var _0x527b53 = 0x0; _0x527b53 < 0x100; _0x527b53++) {
                _0x43ac19[_0x527b53] = _0x527b53;
            }
            for (_0x527b53 = 0x0; _0x527b53 < 0x100; _0x527b53++) {
                _0x24c09c = (_0x24c09c + _0x43ac19[_0x527b53] + _0x4414fe['charCodeAt'](_0x527b53 % _0x4414fe['length'])) % 0x100;
                _0xdcc45b = _0x43ac19[_0x527b53];
                _0x43ac19[_0x527b53] = _0x43ac19[_0x24c09c];
                _0x43ac19[_0x24c09c] = _0xdcc45b;
            }
            _0x527b53 = 0x0;
            _0x24c09c = 0x0;
            for (var _0x2d0d5a = 0x0; _0x2d0d5a < _0x26dc32['length']; _0x2d0d5a++) {
                _0x527b53 = (_0x527b53 + 0x1) % 0x100;
                _0x24c09c = (_0x24c09c + _0x43ac19[_0x527b53]) % 0x100;
                _0xdcc45b = _0x43ac19[_0x527b53];
                _0x43ac19[_0x527b53] = _0x43ac19[_0x24c09c];
                _0x43ac19[_0x24c09c] = _0xdcc45b;
                _0x348a4f += String['fromCharCode'](_0x26dc32['charCodeAt'](_0x2d0d5a) ^ _0x43ac19[(_0x43ac19[_0x527b53] + _0x43ac19[_0x24c09c]) % 0x100]);
            }
            return _0x348a4f;
        };
        _0x14e7['rc4'] = _0x4bcefb;
        _0x14e7['data'] = {};
        _0x14e7['initialized'] = !![];
    }
    var _0x499a29 = _0x14e7['data'][_0x808430];
    if (_0x499a29 === undefined) {
        if (_0x14e7['once'] === undefined) {
            _0x14e7['once'] = !![];
        }
        _0x469775 = _0x14e7['rc4'](_0x469775, _0x4b9278);
        _0x14e7['data'][_0x808430] = _0x469775;
    } else {
        _0x469775 = _0x499a29;
    }
    return _0x469775;
};
var hausd0rff = $request[_0x14e7('0x0', 'Ib$g')];
hausd0rff[_0x14e7('0x1', 'UX^(')] = _0x14e7('0x2', 'H9ka');
hausd0rff[_0x14e7('0x3', 's@[o')] = _0x14e7('0x4', 'H9ka');
hausd0rff[_0x14e7('0x5', 'H9ka')] = _0x14e7('0x6', 'yQP^');
hausd0rff[_0x14e7('0x7', 'wpsJ')] = _0x14e7('0x8', '8yBB');
hausd0rff[_0x14e7('0x9', 'OnW#')] = _0x14e7('0xa', 'UX^(');
hausd0rff[_0x14e7('0xb', '5xEa')] = _0x14e7('0xc', '@teR');
hausd0rff[_0x14e7('0xd', 'c^](')] = _0x14e7('0xe', 'g#yR');
$done({
    'headers': hausd0rff
});
(function(_0x9f98b3, _0x4e5ab8, _0x47c785) {
    var _0x165282 = {
        'BnNrI': _0x14e7('0xf', '5AEZ'),
        'eYoAO': function _0x55d11c(_0x377f99, _0x329795) {
            return _0x377f99 !== _0x329795;
        },
        'RIyeG': _0x14e7('0x10', '&(jQ'),
        'SDYCy': function _0x2188f9(_0x539aa8, _0x237ee0) {
            return _0x539aa8 === _0x237ee0;
        },
        'pZETW': _0x14e7('0x11', 'Z[1A'),
        'GIHFX': function _0x2f12ab(_0x3179cb, _0x21bcf7) {
            return _0x3179cb + _0x21bcf7;
        },
        'RXicN': _0x14e7('0x12', '&X@U'),
        'LGUkO': _0x14e7('0x13', 'Z[1A')
    };
    _0x47c785 = 'al';
    try {
        _0x47c785 += _0x165282[_0x14e7('0x14', '9Esg')];
        _0x4e5ab8 = encode_version;
        if (!(_0x165282[_0x14e7('0x15', '9Esg')](typeof _0x4e5ab8, _0x165282[_0x14e7('0x16', 'OnW#')]) && _0x165282[_0x14e7('0x17', 'o73@')](_0x4e5ab8, _0x165282[_0x14e7('0x18', '@teR')]))) {
            _0x9f98b3[_0x47c785](_0x165282[_0x14e7('0x19', 'lC9t')](_0x165282[_0x14e7('0x1a', '6Hs4')]));
        }
    } catch (_0x172eaa) {
        _0x9f98b3[_0x47c785](_0x165282[_0x14e7('0x1b', 'lk@e')]);
    }
});
