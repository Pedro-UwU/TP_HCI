'use strict';const _0x2234=['insert','../repository/RepositoryFactory','191022dajrHp','deleteById','57296jdoQeK','\x20not\x20found','../utils/PagedResult','35675sjTpOw','mapVideoEntity','\x20\x20not\x20found','exports','queryByAdvancedFilter','200795QrpjRw','mapVideoDto','174768lbnBCQ','add','User\x20is\x20not\x20the\x20owner\x20of\x20exercise\x20id\x20','updateVideoDto','101810VVZUfl','../errors/errors','create','update','modify','8VuVtuw','Exercise\x20id\x20','3XcUKvG','Exercise','content','54388kkfySu','Video','Video\x20id\x20','queryById','retrieve','4QkuIlN','2LfmnUf'];const _0x3be09a=_0x4698;(function(_0x26e1d7,_0x455613){const _0x5ba153=_0x4698;while(!![]){try{const _0x20fd99=-parseInt(_0x5ba153(0x1d1))*-parseInt(_0x5ba153(0x1ce))+-parseInt(_0x5ba153(0x1cc))*-parseInt(_0x5ba153(0x1df))+parseInt(_0x5ba153(0x1e6))+-parseInt(_0x5ba153(0x1e4))+parseInt(_0x5ba153(0x1da))+-parseInt(_0x5ba153(0x1d7))*parseInt(_0x5ba153(0x1ea))+-parseInt(_0x5ba153(0x1dc))*parseInt(_0x5ba153(0x1d6));if(_0x20fd99===_0x455613)break;else _0x26e1d7['push'](_0x26e1d7['shift']());}catch(_0x4e4a1e){_0x26e1d7['push'](_0x26e1d7['shift']());}}}(_0x2234,0x2c213));const {RepositoryName,RepositoryFactory}=require(_0x3be09a(0x1d9)),{ModelMapper}=require('./ModelMapper'),{PagedResult}=require(_0x3be09a(0x1de)),{NotFoundError,ForbiddenError}=require(_0x3be09a(0x1eb));function _0x4698(_0x5054af,_0x2bee26){_0x5054af=_0x5054af-0x1c9;let _0x223464=_0x2234[_0x5054af];return _0x223464;}async function ensureExercise(_0x4c8406,_0x1aa4f1){const _0x2986e7=_0x3be09a,_0x390f6d=RepositoryFactory[_0x2986e7(0x1c9)](RepositoryName[_0x2986e7(0x1cf)]),_0x13e1f6=await _0x390f6d[_0x2986e7(0x1d4)](_0x1aa4f1);if(!_0x13e1f6)throw new NotFoundError([_0x2986e7(0x1cd)+_0x1aa4f1+_0x2986e7(0x1dd)]);if(_0x13e1f6['userId']!==_0x4c8406['id'])throw new ForbiddenError([_0x2986e7(0x1e8)+_0x1aa4f1]);return _0x13e1f6;}async function ensureVideo(_0x48305e){const _0x6eadb9=_0x3be09a,_0x60d9e4=RepositoryFactory[_0x6eadb9(0x1c9)](RepositoryName[_0x6eadb9(0x1d2)]);let _0x33ec6b=await _0x60d9e4['queryById'](_0x48305e);if(!_0x33ec6b)throw new NotFoundError([_0x6eadb9(0x1d3)+_0x48305e+_0x6eadb9(0x1e1)]);return _0x33ec6b;}module['exports'][_0x3be09a(0x1e7)]=async(_0x79200b,_0x15b62b,_0x3dd184)=>{const _0x31ffcc=_0x3be09a;await ensureExercise(_0x79200b,_0x15b62b);const _0x1ba8b2=ModelMapper[_0x31ffcc(0x1e5)](_0x3dd184,_0x15b62b),_0x1d186f=RepositoryFactory['create'](RepositoryName[_0x31ffcc(0x1d2)]),_0x105f20=await _0x1d186f[_0x31ffcc(0x1d8)](_0x1ba8b2);return ModelMapper[_0x31ffcc(0x1e0)](_0x105f20);},module[_0x3be09a(0x1e2)][_0x3be09a(0x1cb)]=async(_0x59fdb1,_0x4a36fc,_0xde0739,_0x1fbe82)=>{const _0x4cb951=_0x3be09a;await ensureExercise(_0x59fdb1,_0x4a36fc);const _0x26028a=RepositoryFactory[_0x4cb951(0x1c9)](RepositoryName[_0x4cb951(0x1d2)]);let _0x41737f=await ensureVideo(_0xde0739);return ModelMapper[_0x4cb951(0x1e9)](_0x41737f,_0x1fbe82),_0x41737f=await _0x26028a[_0x4cb951(0x1ca)](_0x41737f),ModelMapper['mapVideoEntity'](_0x41737f);},module[_0x3be09a(0x1e2)]['remove']=async(_0xc33e28,_0x155eed,_0x4e4efb)=>{const _0x183dad=_0x3be09a;await ensureExercise(_0xc33e28,_0x155eed);const _0x4e4228=RepositoryFactory[_0x183dad(0x1c9)](RepositoryName[_0x183dad(0x1d2)]),_0x4527f8=await _0x4e4228[_0x183dad(0x1db)](_0x4e4efb);if(_0x4527f8===0x0)throw new NotFoundError([_0x183dad(0x1d3)+_0x4e4efb+'\x20not\x20found']);},module['exports'][_0x3be09a(0x1d5)]=async(_0x2669e2,_0x19c84,_0x175dd)=>{const _0x2b64f8=_0x3be09a;await ensureExercise(_0x2669e2,_0x19c84);const _0x5af159=await ensureVideo(_0x175dd);return ModelMapper[_0x2b64f8(0x1e0)](_0x5af159);},module['exports']['retrieveList']=async(_0x5d4a6f,_0x115b51,_0x4f7390,_0x3ec2e9,_0x5200d7,_0x3445a5)=>{const _0x4ae08a=_0x3be09a;await ensureExercise(_0x5d4a6f,_0x115b51);const _0x2730f5={'exerciseId':_0x115b51},_0x172aaa=RepositoryFactory['create'](RepositoryName[_0x4ae08a(0x1d2)]);let _0x1946c2=await _0x172aaa[_0x4ae08a(0x1e3)](_0x2730f5,null,_0x4f7390,_0x3ec2e9,_0x5200d7,_0x3445a5);return _0x1946c2[_0x4ae08a(0x1d0)]=_0x1946c2[_0x4ae08a(0x1d0)]['map'](_0x4fbbf2=>ModelMapper[_0x4ae08a(0x1e0)](_0x4fbbf2)),_0x1946c2;};