
/**************************************************
  Polish
 *************************************************/

module("lang:pl");

test("parse", 96, function() {
    moment.lang('pl');
    var tests = 'styczeń sty_luty lut_marzec mar_kwiecień kwi_maj maj_czerwiec cze_lipiec lip_sierpień sie_wrzesień wrz_październik paź_listopad lis_grudzień gru'.split("_");
    var i;
    function equalTest(input, mmm, i) {
        equal(moment(input, mmm).month(), i, input + ' should be month ' + (i + 1));
    }
    for (i = 0; i < 12; i++) {
        tests[i] = tests[i].split(' ');
        equalTest(tests[i][0], 'MMM', i);
        equalTest(tests[i][1], 'MMM', i);
        equalTest(tests[i][0], 'MMMM', i);
        equalTest(tests[i][1], 'MMMM', i);
        equalTest(tests[i][0].toLocaleLowerCase(), 'MMMM', i);
        equalTest(tests[i][1].toLocaleLowerCase(), 'MMMM', i);
        equalTest(tests[i][0].toLocaleUpperCase(), 'MMMM', i);
        equalTest(tests[i][1].toLocaleUpperCase(), 'MMMM', i);
    }
});

test("format", 18, function() {
    moment.lang('pl');
    var a = [
            ['dddd, MMMM Do YYYY, h:mm:ss a',      'niedziela, luty 14. 2010, 3:25:50 pm'],
            ['ddd, hA',                            'nie, 3PM'],
            ['M Mo MM MMMM MMM',                   '2 2. 02 luty lut'],
            ['YYYY YY',                            '2010 10'],
            ['D Do DD',                            '14 14. 14'],
            ['d do dddd ddd',                      '0 0. niedziela nie'],
            ['DDD DDDo DDDD',                      '45 45. 045'],
            ['w wo ww',                            '8 8. 08'],
            ['h hh',                               '3 03'],
            ['H HH',                               '15 15'],
            ['m mm',                               '25 25'],
            ['s ss',                               '50 50'],
            ['a A',                                'pm PM'],
            ['t\\he DDDo \\d\\ay of t\\he ye\\ar', 'the 45. day of the year'],
            ['L',                                  '14-02-2010'],
            ['LL',                                 '14 luty 2010'],
            ['LLL',                                '14 luty 2010 15:25'],
            ['LLLL',                               'niedziela, 14 luty 2010 15:25']
        ],
        b = moment(new Date(2010, 1, 14, 15, 25, 50, 125)),
        i;
    for (i = 0; i < a.length; i++) {
        equal(b.format(a[i][0]), a[i][1], a[i][0] + ' ---> ' + a[i][1]);
    }
});

test("format ordinal", 31, function() {
    moment.lang('pl');
    equal(moment([2011, 0, 1]).format('DDDo'), '1.', '1.');
    equal(moment([2011, 0, 2]).format('DDDo'), '2.', '2.');
    equal(moment([2011, 0, 3]).format('DDDo'), '3.', '3.');
    equal(moment([2011, 0, 4]).format('DDDo'), '4.', '4.');
    equal(moment([2011, 0, 5]).format('DDDo'), '5.', '5.');
    equal(moment([2011, 0, 6]).format('DDDo'), '6.', '6.');
    equal(moment([2011, 0, 7]).format('DDDo'), '7.', '7.');
    equal(moment([2011, 0, 8]).format('DDDo'), '8.', '8.');
    equal(moment([2011, 0, 9]).format('DDDo'), '9.', '9.');
    equal(moment([2011, 0, 10]).format('DDDo'), '10.', '10.');

    equal(moment([2011, 0, 11]).format('DDDo'), '11.', '11.');
    equal(moment([2011, 0, 12]).format('DDDo'), '12.', '12.');
    equal(moment([2011, 0, 13]).format('DDDo'), '13.', '13.');
    equal(moment([2011, 0, 14]).format('DDDo'), '14.', '14.');
    equal(moment([2011, 0, 15]).format('DDDo'), '15.', '15.');
    equal(moment([2011, 0, 16]).format('DDDo'), '16.', '16.');
    equal(moment([2011, 0, 17]).format('DDDo'), '17.', '17.');
    equal(moment([2011, 0, 18]).format('DDDo'), '18.', '18.');
    equal(moment([2011, 0, 19]).format('DDDo'), '19.', '19.');
    equal(moment([2011, 0, 20]).format('DDDo'), '20.', '20.');

    equal(moment([2011, 0, 21]).format('DDDo'), '21.', '21.');
    equal(moment([2011, 0, 22]).format('DDDo'), '22.', '22.');
    equal(moment([2011, 0, 23]).format('DDDo'), '23.', '23.');
    equal(moment([2011, 0, 24]).format('DDDo'), '24.', '24.');
    equal(moment([2011, 0, 25]).format('DDDo'), '25.', '25.');
    equal(moment([2011, 0, 26]).format('DDDo'), '26.', '26.');
    equal(moment([2011, 0, 27]).format('DDDo'), '27.', '27.');
    equal(moment([2011, 0, 28]).format('DDDo'), '28.', '28.');
    equal(moment([2011, 0, 29]).format('DDDo'), '29.', '29.');
    equal(moment([2011, 0, 30]).format('DDDo'), '30.', '30.');

    equal(moment([2011, 0, 31]).format('DDDo'), '31.', '31.');
});

test("format month", 12, function() {
    moment.lang('pl');
    var expected = 'styczeń sty_luty lut_marzec mar_kwiecień kwi_maj maj_czerwiec cze_lipiec lip_sierpień sie_wrzesień wrz_październik paź_listopad lis_grudzień gru'.split("_");
    var i;
    for (i = 0; i < expected.length; i++) {
        equal(moment([2011, i, 0]).format('MMMM MMM'), expected[i], expected[i]);
    }
});

test("format week", 7, function() {
    moment.lang('pl');
    var expected = 'niedziela nie_poniedziałek pon_wtorek wt_środa śr_czwartek czw_piątek pt_sobota sb'.split("_");
    var i;
    for (i = 0; i < expected.length; i++) {
        equal(moment([2011, 0, 2 + i]).format('dddd ddd'), expected[i], expected[i]);
    }
});

test("from", 30, function() {
    moment.lang('pl');
    var start = moment([2007, 1, 28]);
    equal(start.from(moment([2007, 1, 28]).add({s:44}), true),  "kilka sekund",  "44 seconds = a few seconds");
    equal(start.from(moment([2007, 1, 28]).add({s:45}), true),  "minuta",        "45 seconds = a minute");
    equal(start.from(moment([2007, 1, 28]).add({s:89}), true),  "minuta",        "89 seconds = a minute");
    equal(start.from(moment([2007, 1, 28]).add({s:90}), true),  "2 minuty",      "90 seconds = 2 minutes");
    equal(start.from(moment([2007, 1, 28]).add({m:44}), true),  "44 minuty",     "44 minutes = 44 minutes");
    equal(start.from(moment([2007, 1, 28]).add({m:45}), true),  "godzina",       "45 minutes = an hour");
    equal(start.from(moment([2007, 1, 28]).add({m:89}), true),  "godzina",       "89 minutes = an hour");
    equal(start.from(moment([2007, 1, 28]).add({m:90}), true),  "2 godziny",     "90 minutes = 2 hours");
    equal(start.from(moment([2007, 1, 28]).add({h:5}), true),   "5 godzin",      "5 hours = 5 hours");
    equal(start.from(moment([2007, 1, 28]).add({h:21}), true),  "21 godzin",     "21 hours = 21 hours");
    equal(start.from(moment([2007, 1, 28]).add({h:22}), true),  "1 dzień",       "22 hours = a day");
    equal(start.from(moment([2007, 1, 28]).add({h:35}), true),  "1 dzień",       "35 hours = a day");
    equal(start.from(moment([2007, 1, 28]).add({h:36}), true),  "2 dni",         "36 hours = 2 days");
    equal(start.from(moment([2007, 1, 28]).add({d:1}), true),   "1 dzień",       "1 day = a day");
    equal(start.from(moment([2007, 1, 28]).add({d:5}), true),   "5 dni",         "5 days = 5 days");
    equal(start.from(moment([2007, 1, 28]).add({d:25}), true),  "25 dni",        "25 days = 25 days");
    equal(start.from(moment([2007, 1, 28]).add({d:26}), true),  "miesiąc",       "26 days = a month");
    equal(start.from(moment([2007, 1, 28]).add({d:30}), true),  "miesiąc",       "30 days = a month");
    equal(start.from(moment([2007, 1, 28]).add({d:45}), true),  "miesiąc",       "45 days = a month");
    equal(start.from(moment([2007, 1, 28]).add({d:46}), true),  "2 miesiące",    "46 days = 2 months");
    equal(start.from(moment([2007, 1, 28]).add({d:74}), true),  "2 miesiące",    "75 days = 2 months");
    equal(start.from(moment([2007, 1, 28]).add({d:76}), true),  "3 miesiące",    "76 days = 3 months");
    equal(start.from(moment([2007, 1, 28]).add({M:1}), true),   "miesiąc",       "1 month = a month");
    equal(start.from(moment([2007, 1, 28]).add({M:5}), true),   "5 miesięcy",    "5 months = 5 months");
    equal(start.from(moment([2007, 1, 28]).add({d:344}), true), "11 miesięcy",   "344 days = 11 months");
    equal(start.from(moment([2007, 1, 28]).add({d:345}), true), "rok",           "345 days = a year");
    equal(start.from(moment([2007, 1, 28]).add({d:547}), true), "rok",           "547 days = a year");
    equal(start.from(moment([2007, 1, 28]).add({d:548}), true), "2 lata",        "548 days = 2 years");
    equal(start.from(moment([2007, 1, 28]).add({y:1}), true),   "rok",           "1 year = a year");
    equal(start.from(moment([2007, 1, 28]).add({y:5}), true),   "5 lat",         "5 years = 5 years");
});

test("suffix", 2, function() {
    moment.lang('pl');
    equal(moment(30000).from(0), "za kilka sekund",  "prefix");
    equal(moment(0).from(30000), "kilka sekund temu", "suffix");
});


test("now from now", 1, function() {
    moment.lang('pl');
    equal(moment().fromNow(), "kilka sekund temu",  "now from now should display as in the past");
});


test("fromNow", 3, function() {
    moment.lang('pl');
    equal(moment().add({s:30}).fromNow(), "za kilka sekund", "in a few seconds");
    equal(moment().add({h:1}).fromNow(), "za godzinę", "in an hour");
    equal(moment().add({d:5}).fromNow(), "za 5 dni", "in 5 days");
});



test("calendar day", 6, function() {
    moment.lang('pl');

    var a = moment().hours(2).minutes(0).seconds(0);

    equal(moment(a).calendar(),                     "Dziś o 02:00",     "today at the same time");
    equal(moment(a).add({ m: 25 }).calendar(),      "Dziś o 02:25",     "Now plus 25 min");
    equal(moment(a).add({ h: 1 }).calendar(),       "Dziś o 03:00",     "Now plus 1 hour");
    equal(moment(a).add({ d: 1 }).calendar(),       "Jutro o 02:00",  "tomorrow at the same time");
    equal(moment(a).subtract({ h: 1 }).calendar(),  "Dziś o 01:00",     "Now minus 1 hour");
    equal(moment(a).subtract({ d: 1 }).calendar(),  "Wczoraj o 02:00",     "yesterday at the same time");
});

test("calendar next week", 15, function() {
    moment.lang('pl');

    var i;
    var m;

    for (i = 2; i < 7; i++) {
        m = moment().add({ d: i });
        equal(m.calendar(),       m.format('[W] dddd [o] LT'),  "Today + " + i + " days current time");
        m.hours(0).minutes(0).seconds(0).milliseconds(0);
        equal(m.calendar(),       m.format('[W] dddd [o] LT'),  "Today + " + i + " days beginning of day");
        m.hours(23).minutes(59).seconds(59).milliseconds(999);
        equal(m.calendar(),       m.format('[W] dddd [o] LT'),  "Today + " + i + " days end of day");
    }
});

test("calendar last week", 15, function() {
    moment.lang('pl');

    for (i = 2; i < 7; i++) {
        m = moment().subtract({ d: i });
        equal(m.calendar(),       m.format('[W zeszły/łą] dddd [o] LT'),  "Today - " + i + " days current time");
        m.hours(0).minutes(0).seconds(0).milliseconds(0);
        equal(m.calendar(),       m.format('[W zeszły/łą] dddd [o] LT'),  "Today - " + i + " days beginning of day");
        m.hours(23).minutes(59).seconds(59).milliseconds(999);
        equal(m.calendar(),       m.format('[W zeszły/łą] dddd [o] LT'),  "Today - " + i + " days end of day");
    }
});

test("calendar all else", 4, function() {
    moment.lang('pl');
    var weeksAgo = moment().subtract({ w: 1 });
    var weeksFromNow = moment().add({ w: 1 });
    
    equal(weeksAgo.calendar(),       weeksAgo.format('L'),  "1 week ago");
    equal(weeksFromNow.calendar(),   weeksFromNow.format('L'),  "in 1 week");

    weeksAgo = moment().subtract({ w: 2 });
    weeksFromNow = moment().add({ w: 2 });
    
    equal(weeksAgo.calendar(),       weeksAgo.format('L'),  "2 weeks ago");
    equal(weeksFromNow.calendar(),   weeksFromNow.format('L'),  "in 2 weeks");
});
