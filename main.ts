/** 
Title: Fleeing Feline
Creators: Mei and Caroline
Description: A cat trying to escape their castle and dodge various enemies

 */
//  game setup
scene.setBackgroundImage(img`
    ccccccccccccccccccccbcccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccdc
    bcbbbbbbbbbbbbbbbbbdbbbbbbcbbbbbbbbbbbcbbbbbbbbbbbcbbbbbbbbbbcdbdbbbbbbdbcbbbbbbbbdbbcbbddddddbbbcbbbbbbbbbbbcdbbbbbbbbbbcbbbbbbbbbbbcdddddddbbbcbbbbbbbbbbbcbbd
    bcbbbbbbbbbbbcbbbbbbbbbbbbcbbbbbbbbbbbcbbbbbbbbbbbcbbbbbbbbbbcbbbbbbbbbbbcbbbbbbbbbbbcbbbbbbbbbbdcbbbbbbbbbbbcbbbbbbbbbbdcbbbbbbbbbbbcbbbbbbbbbbcbbbbbbbbbbbcbbb
    bcbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbcbbbbbbbbbbbcbbbbbbbbbbcbbbbbbbbbbbcbbbbbbbbbbbcbbbbbbbbbbdcbbbbbbbbbbbcbbbbbbbbbbbcbbbbbbbbbbbcbbbbbbbbbbcbbbbbbbbbbbcbbb
    bcbbbbbbbbbbbcbbbbbbbbbbbbcbbbbbbbbbbbcbbbbbbbbbbbcbbbbbbbbbbcbbbbbbbbbbbcbbbbbbbbbbbdbbbbbbbbbbdcbbbbbbbbbbbcbbbbbbbbbbbcbbbbbbbbbbbcdbbbbbbbbbcbbbbbbbbbbbcbbb
    bcbbbbbbbbbbbcbbbbbbbbbbbbcbbbbbbbbbbbcbbbbbbbbbbbcbbbbbbbbbbcbbbbbbbbbbbcbbbbbbbbbbbcbbbbbbbbbbbcbbbbbbbbbbbcbbbbbbbbbbbcbbbbbbbbbbbcdbbbbbbbbbcbbbbbbbbbbbcbbb
    cccccccccccccccccccccccccbcccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    bbbbbcbbbbbbbdbbbcbbbbbbbbbbbbcbbbbbbbbbbbcbbbbbbbbbbbcbbbbbbbbbbcbbbbbbbbbbbcbbbbbbbbbbbcbbbbbbbbbbbcbbbbbbbbbbbcbbbbbbbbbbbcbbbbbbbbbbbcbbbbbbbbbbcbbbbbbbbbcb
    bbbbbcbbbbbbbbbbbcbbbbbbbbbbbbcbbbbbbbbbbbcbbbbbbbbbbbcbbbbbbbbbbcbbbbbbbbbbbcbbbbbbbbbbbcbbbbbbbbbbbcbbbbbbbbbbbcbbbbbbbbbbbcbbbbbbbbbbbcbbbbbbbbbbcbbbbbbbbbcb
    bbbbbcbbbbbbbbbbbcbbbbbbbbbbbbcbbbbbbbbbbbcbbbbbbbbbbbcbbbbbbbbbbcbbbbbbbbbbbcbbbbbbbbbbbcbbbbbbbbbbbcbbbbbbbbbbbcbbbbbbbbbbbcbbbbbbbbbbbcbbbbbbbbbbcbbbbbbbbbcb
    bbbbbcbbbbbbbbbbbcbbbbbbbbbbbbcbbbbbbbbbbbcbbbbbbbbbbbcbbbbbbbbbbcbbbbbbbbbbbcbbbbbbbbbbbcbbbbbbbbbbbcbbbbbbbbbbbcbbbbbbbbbbbcbbbbbbbbbbbcbbbbbbbbbbcbbbbbbbbbcb
    bbbbbcbbbbbbbbbbbdbbbbbbbbbbbbcbbbbbbbbbbbcbbbbbbbbbbbcbbbbbbbbbbcbbbbbbbbbbbcbbbbbbbbbbbcbbbbbbbbbbbcbbbbbbbbbbbcbbbbbbbbbbbcbbbbbbbbbbbcbbbbbbbbbbcbbbbbbbbbcb
    cccccccccccccccccccccccccccccccccccccccbddcccccccdccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccbbbbcccccccccccccccccccccccccccccc
    bbbbbbbbbbbcbbbbbbbbbbbbcbbbbbbbbbbbcbbbbbbbbbbbcbbdbbdbbbbcbbbbbbbbbbbcbddbbbbdbbbcbbbbbbbbbbbcbbbbbbaaaaacbbbbbbdddbbcbbdbdbbbbbbcbbbbbbbbbbcbbbbbbbbbbbcbbbbb
    bbbbbbbbbbbcbbbbbbbbbbbbcbbbbbbbbbbbcdbbbbbbbbbbcbbbbbbbbbbcbbbbbbbbbbbcbbbdbbbbddbcbbbbbbbbbbbcbbabbbbbbbbcbbbbbbbbbbbcbbbbbbbbbbbcbbbbbbbbbbcbbbbbbbbbbbcbbbbb
    bbbbbbbbbbbcbbbbbbbbbbbbcbbbbbbbbbbbcbbbbbbbbbbbcbbbbbbbbbbcbbbbbbbbbbbcbbbbbbdbbbbcbbbbbbbbbbbcbbbbbbbbbbbcbbbbbbbbbbbcbbbbbbbbbbbcbbbbbbbbbbcbbbbbbbbbbbcbbbbb
    bbbbbbbbbbbcbbbbbbbbbbbbcbbbbbbbbbbbcbbbbbbbbbbbcbbbbbbbbbbcbbbbbbbbbbbcbbbbbbbbbbbcbbbbbbbbbbbcbbbbbbbaaabcbbbbbbbbbbbcbbbbbbbbbbbcbbbbbbbbbbcbbbbbbbbbbbcbbbbb
    bbbbbbbbbbbcbbbbbbbbbbbbcbbbbbbbbbbbcbbbbbbbbbbbcbbbbbbbbbbcbbbbbbbbbbbcbbbbbbbbbbbcbbbbbbbbbbbcbbbbbbbbbbbcbbbbbbbbbbbcbbbbbbbbbbbcbbbbbbbbbbcbbbbbbbbbbbcbbbbb
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    bbbcbbbbbbbbbbbcbbbbdbbbbbbbcbbbbbbbbbbbcbbbbbbbbbbbcbbbbbbbbbbcbbbbbbbbbabcbbbbbbbbbbbcbbbbbbbbbbbcbbbbbbbbbbbcbbbbbbbbbbbcbbbbbbbbbbbcbbbbbbbbbbcbbbbbbbbbcbbb
    bbbcbbbbbbbbbbbcbbbbbbbbbbbbcbbbbbbbbbbbcbbbbbbbbbbbcbbbbbbbbbbcbbbbbbbbbabcbbbbbbbbbbbcbbbbbbbbbbbcbbbbbbbbbbbcbbbbbbbbbbbcbbbbbbbbbbbcbbbbbbbbbbcbbbbbbbbbcbbb
    bbbcbbbbbbbbbbbcdbbbbbbbbbbbcbbbbbbbbbbbcbbbbbbbbbbbcbbbbbbbbbbcbbbbbbbbbbbcbbbbbbbbbbbcbbbbbbbbbbbcbbbbbbbbbbbcbbbbbbbbbbbcbbbbbbbbbbbcbbbbbbbbbbcbbbbbbbbbcbbb
    bbbcbbbbbbbbbbbcbbbbbbbbbbbbcbbbbbbbbbbbcbbbbbbbbbbbcbbbbbbbbbbcbbbbbbbbbbbcbbbbbbbbbbbcbbbbbbbbbbbcbbbbbbbbbbbcbbbbbbbbbbbcbbbbbbbbbbbcbbbbbbbbbbcbbbbbbbbbcbbb
    bbbcbbbbbbbbbbbcbbbbbbbbbbbbcbbbbbbbbbbbcbbbbbbbbbbbcbbbbbbbbbbcbbbabbbbbbbcbbbbbbbbbbbcbbbbbbbbbbbcbbbbbbbbbbbcbbbbbbbbbbbcbbbbbbbbbbbcbbbbbbbbbbcbbbbbbbbbcbbc
    ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccbbccbccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cbbbbbbbbbbbcbbbbbbbbbbbbcbbbbbbbbbbbcbbbbbbbbbbbcbbbbbbbbbbcbbbbbbbbbbbcbbbbbbbbbbbcbbbbbbbbabbcbbbbbbbbbbdcbbbbbbbbbbbcbbbbbbbbbbbcbbbbbbbbbbcbbbbbbbbbbbcbbbb
    cbbbbbbbbbbbcbbbbbbbbbbbbcbbbbbbbbbbbcbbbbbbbbbbbcbbbbbbbbbbcbbbbbbbbbbbcbbbbbbbbbbbcbbbbbbbbbbbcabbbbbbbbbdcbbbbbbbbbbbcbbbbbbbbbbbcbbbbbbbbbbcbbbbbbbbbbbcbbbb
    cbbbbbbbbbbbcbdbbbbbbbbbbcbbbbbbbbbbbcbbbbbbbbbbbcbbbbbbbbbbcbbbbbbbbbbbcbbbbbbbbbbbcbbbbbbbbbbbaabbbbbbbbbbdbbbbbbbbbbbcbbbbbbbbbbbcbbbbbbbbbbcbbbbbbbbbbbcbbbb
    cbbbbbbbbbbbcbbbbbbbbdbbbcbbbbbbbbbbbcbbbbbbbbbbbcbbbbbbbbbbcbbbbbbbbbbbcbbbbbbbbbbbcbbbbbbbbbbbcbbbbbbbbbbbcbbbbbbbbbbbcbbbbbbbbbbbcbbbbbbbbbbcbbbbbbbbbbbcbbbb
    cbbbbbbbbbbbcbbbbbbbbbbbbcbbbbbbbbbbbcbbbbbbbbbbbcbbbbbbbbbbcbbbbbbbbbbbcbbbbbbbbbbbcbbbbbbbbbbbcbbbbbbbbbbbcbbbbbbbbbbbcbbbbbbbbbbbcbbbbbbbbbbcbbbbbbbbbbbcbbbb
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccacccccccccccccccccccccccccccccccccccccccccc
    bbbbcbbbbbbbbbbbcbbbbbbbbbbbbcbbbbbbbbbbbcbbbbbbbbbbbcbbcbbbbbbbcbbbbbbbbbbbcbbbbbbbbbbbcbbbbbbbbbbbcbbbbbbbbbbbcbbbbbbbbbbbcbbbbbbddddddbbbbbbbbbbcbbbbbbbbbcbb
    bbbbcbbbbbbbbbbbcbbbbbbbbbbbbcbbbbbbbbbbbcbbbbbbbbbbbcbbbcbbbbbbcbbbbbbbbbbbcbbbbbbbbbbbcbbbbbbbbbbbcbbbbbbbbbbbcbbbbbbbbbbbcbbbbbbbbbbbcbbbbbbbbbbcbbbbbbbbbcbb
    bbbbcbbbbbbbbbbbcbbbbbbbbbbbbcbbbbbbbbbbbcbbbbbbbbbbbcbbbbbbbbbccbbbbbbbbbbbcbbbbbdbbbbbcbbbbbbdbbbbcbbbbbbbbbbbcbbbbbbbbbbbcbbbbbbbbbbbcbbbbbbbbbbcbbbbbbbbbcbb
    bbbbcbbbbbbbbbbbcbbbbbbbbbbbbcbbbbbbbbbbbcbbbbbbbbbbbcbbbbabbbbacbbbbbbbbbbbcbbbbbbbbbbbcbbbdbbbbdbbcbbbbbbbbbbbcbbbbbbbbbbbcbbbbbbbbbbbcbbbbbbbbbbcbbbbbbbbbcbb
    bbbbcbbbbbbbbbbbcbbbbbbbbbbbbcbbbbbbbbbbbcbbbbbbbbbbbcbbbbbbbbbbcbbbbbbbbbbbcbbbbbbbbbbbcbbbbbbbbbbbcbbbbbbbbbbbcbbbbbbbbbbbcbbbbbbbbbbbcbbbbbbbbbbcbbbbbbbbbcbb
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cbbbbbbbbbbbcbbbbbbbbbbbbbbbbbbbbbbbbcbbbbbbbbbbbcbbbbbbbbbbcbbbbbbbbbbbcbbbbbbbbbbbcbbbbbbbbbbbcbbbbbbbbbbbcbbbbbbbbbbbcbbbbbbbbbbbcbbbbbbbbbbcbbbbbbbbbbbcbbbb
    cbbbbbbbbbbbcbbbbbbbbbbbbcbbbbbbbbbbbcbbbbbbbbbbbcbbbbbbbbbbcbbbbbbbbbbbcbbbbbbbbbbbcbbbbbbbbbbbcbbbbbbbbbbbcbbbbbbbbbbbcbbbbbbbbbbbcbbbbbbbbbbcbbbbbbbbbbbcbbbb
    cbbbbbbbbbbbcbbbbbbbbbbbbcbbbbbbbbbbbcbbbbbbbbbbbcbbbbbbbbbbcbbbbbbbbbbbcbbbbbbbbbbbcbbbbbbbbbbbcbbbbbbbbbbbcbbbbbbbbbbbcbbbbbbbbbbbcbbbbbbbbbbcbbbbbbbdbbbcbbbb
    cbbbbbbbbbbbcbbbbbbbbbbbbcbbbbbbbbbbbcbbbbbbbbbbbcbbbbbbbbbbcbbbbbbbbbbbcbbbbbabbbbbcbbbbbbbbbbbcbbbbbbbbbbbcbbbbbbbbbbbcbbbbbbbbbbbcbbbbbbbbbbcbbbbbbbbbbbcbbdb
    cbbbbbbbbbbbcbbbbbbbbbbbbcbbbbbbbbbbbcbbbbbbbbbbbcbbbbbbbbbbcbbbbbbbbbbbcbbbbbbbbbbbcbbbbbbbbbbbcbbbbbbbbbbbcbbbbbbbbbbbcbbbbbbbbbbbcbbbbbbbbbbcbbbbbbbbbbbcbbbb
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    bbbbcbbbbbbbbbbbcbbbbbbbbbbbbcbbbbbbbbbbbcbbbbbbbbbbbcbbbbbbbbbbcbbbbbbbbbbbcbbbbbbbbbbbcbbbbbbbbbbbcbbbbbbbbbbbcbbbbbbbbbbbcbbbbbbbbbbbcbbbbbbbbbbcbbbbbbbbbcbb
    bbbbcbbbbbbbbbbbcbbbbbbbbbbbbcbbbbbbbbbbbcbbbbbbbbbbbcbbbbbbbbbbcbbbbbbbbbbbcbbbbbbbbbbbcbbbbbbbbbbbcbbbbbbbbbbbcbbbbbbbbbbbcbbbbbbbbbbbcbbbbbbbbbbcbbbbbbbbbcbb
    bbbbcbbbbbbbbbbbcbbbbbbbbbbbbcbbbbbbbbbbbcbbbbbbbbbbbcbbbbbbbbbbcbbbaabbbbbbcbbbbbbbbbbbcbbbbbbbbbbbcbbbbbbbbbbbcbbbbbbbbbbbcbbbbbbbbbbbcbbbbbbbbbbcbbbbbbbbbcbb
    bbbbcbbbbbbbbbbbcbbbbbbbbbbbbcbbbbbbbbbbbcbbbbbbbbbbbcbbbbbbbbbbcbbbbbbbbbbbcbbbbbbbbbbbcbbbbbbbbbbbcbbbbbbbbbbbcbbbbbbbbbbbcbbbbbbbbbbbcbbbbbbbbbbcbbbbbbbbbcbb
    bbbbcbbbbbbbbbbbcbbbbbbbbbbbbcbbbbbbbbbbbcbbbbbbbbbbbcbbbbbbbbbbcbbbbbbbbbbbcbbbbbbbbbbbcbbbbbbbbbbbcbbbbbbbbbbbcbbbbbbbbbbbcbbbbbbbbbbbcbbbbbbbbbbcbbbbbbbbbcbb
    ccccccccccccccccccccccccccccccccccccccccccccccccccccbccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccb
    bcbbbbbbbbbbbcbbbbbbbbbbbbcbbbbbbbbbbbcbbbbbbbbbbbcbbbbbbbbbbcbbbbbbbbbbbcbbbbbbbbbbbcbbbcbbbcccbcbbbbbbbbbbbcbbbbbbbbbbbcbbbbbbbbbbbcbbbbbbbbbbcbbbbbbbbbbbcbbb
    bcbbbbbbbbbbbcbbbbbbbbbbbbcbbbbbbbbbbbcbbbbbbbbbbbcbbbbbbbbbbcbbbbbbbbbbbcbbbbbbbbbbbcbbbbcbbabbbcbbbbbbbbbbbcbbbbbbbbbbbcbbbbbbbdbbbcbbbbbbbbbbcbbbbbbbbbbbcbbb
    bcbbbbbbbbbbbcbbbbbbbbbbbbcbbbbbbbbbbbcbbbbbbbbbbbcbbbbbbbbbbcbbbbbbbbbbbcbbbbbbbbbbbcbbbbbcbbbbbcbbbbbbbbbbbcbbbbbbbbbbbcbbbbbbbbbbbcbbbbbbbbbbcbbbbbbbbbbbcbbb
    bcbbbbbbbbbbbcbbbbbbbbbbbbcbbbbbbbbbbbcbbbbbbbbbbbcbbbbbbbbbbcbbbbbbbbbbbcbbbbbbbbbbbcbbcbabcbbbbcbbbbbbbbbbbcbbbbbbbbbbbcbbbbbbbbbbbcbbbbbbbbbbcbbbbbbbbbbbcbbb
    bcbbbbbbbbbbbcbbbbbbbbbbbbcbbbbbbbbbbbcbbbbbbbbbbbcbbbbbbbbbbcbbbbbbbbbbbcbbbbbbbbbbbcbabbbbbbbbbcbbbbbbbbbbbcbbbbbbbbbbbcbbbbbbbbbbbcbbbbbbbbbbcbbbbbbbbbbbcbbb
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    bbbbbcbbbbbbbbbbbcbbbbbbbbbbbbcbbbbbbbbbbbcbbbbbbbbbbbcbbbbbbbbbbcbbbbbbbbbbbcbbbbbbbbbbbcbbbbbbbbbbbcbbbbbbbbbbbcbbbbbbbbbbbcbbbbbbbbbbbcbbbbbbbbbbcbbbbbbbbbcb
    bbbbbcbbbbcbccbbbcbbbbbbbbbbbbcbbbbbbbbbbbcbbbbbbbbbbbcbbbbbbbbbbcbbbbbbbbbbbcbbbbbbbbbbbcbbbbbbbbbbbcbbbbbbbddbbcbbbbbbbbbbbcbbbbbbbbbbbcbbbbbbbbbbcbbbbbbbbbcb
    bbbbbcbbbbcbbcbbbcbbbbbbbbbbbbcbbbbbbbbbbbcbbbbbbbbbbbcbbbbbbbbbbcbbbbbbbbbbbcbbbbbbbbbbbcbbbbbbbbbbbcbbbbbbbbbbbcbbbbbbbbbbbcbbbbbbbbbbbcbbbbbbbbbbcbbbbbbbbbcb
    bbbbbcbcbbcbbbbbbcbbbbbbbbbbbbcbbbbbbbbbbbcbbbbbbbbbbbcbbbbbddbbbcbbbbbbbbbbbcbbbbbbbbbbbcbbbbbbbbbbbcbbbbbbbbbbbcbbbbbbbbbbbcbbbbbbbbbbbcbbbbbbbbbbcbbbbbbbbbcb
    bbbbbcbbbbbbbbbbbcbbbbbbbbbbbbcbbbbbbbbbbbcbbbbbbbbbbbcbbbbbbbbbbcbbbbbbbbbbbcbbbbbbbbbbbcbbbbbbbbbbbcbbbbbbbbbbbcbbbbbbbbbbbcbbbbbbbbbbbcbbbbbbbbbbcbbbbbbbbbcb
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccb
    bcbbbbbbbbbbbcbbbbbbbbbbbbcbbbbbbbbbbbcbbbbbbbbbbbcbbbbbbbbbbcbbbbbbbbbbbcbbbbbbbbbbbcbbbbbbbbbbbcbbbbbbbbbbbcbbbbbbbbbbbcbbbbbbbbbbbcbbbbbbbbbbcbbbbbbbbbbbcbbb
    bcbbbbbbbbbbbcbbbbbbbbbbbbcbbbbbbbbbbbcbbbbbbbbbbbcbbbbbbbbbbcbbbbbbbbbbbcbbbbbbbbbbbcbbbbbbbbbbbcbbbbbbbbbbbcbbbbbbbbbbbcbbbbbbbbbbbcbbbbbbbbbbcbbbbbbbbbbbcbbb
    bcbbbbbbbbbbbcbbbbbbbbbbbbcbbbbbbbbbbbcbbbbbbbbbbbcbbbbbbbbbbcbbbbbbbbbbbcbbbbbbbbbbbcbbbbbbbbbbbcbbbbbbbbbbbcbbbbbbbbbbbcbbbbbbbbbbbcbbbbbbbbbbcbbbbbbbbbbbcbbb
    bcbbbbbbbbbbbcbbbbbbbbbbbbcbbbbbbbbbbbcbdddbbbbbbbcbbbbbbbbbbcbbbbbbbbbbbcbbbbbbbbbbbcbbbbbbbbbbbcbbbbbbbbbbbcbbbbbbbbbbbcbbbbbbbbbbbcbbbbbbbbbbcbbbbbbbbbbbcbbb
    bcbbbbbbbbbbbcbbbbbbbbbbbbcbbbbbbbbbbbcbbbbbbbbbbbcbbbbbbbbbbcbbbbbbbbbbbcbbbbbbbbbbbcbbbbbbbbbbbcbbbbbbbbbbbcbbbbbbbbbbbcbbbbbbbbbbbcbbbbbbbbbbcbbbbbbbbbbbcbbb
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    bbbbbcbbbbbbbbbbbcbbbbbbbbbbbbcbbbbbbbbbbbcbbbbcacbbbbcbbbbbbbbbbcbbbbbbbbbbbcbbbbbbbbbdbcbbbbbbbbbbbcbbbbbbbbbbbcbbbbbbbbbbbcbbbbbbbbbbbcbbbbbbbbbbcbbbbbbbbbcb
    bbbbbcbbbbbbbbbbbcbbbbbbbbbbbbcbbbbbbbbbbbcbbbbbbbbcabcbbbbbbbbbbcbbbbbbbbbbbcbbbbbbbbbbbcbbbbbbbbbbbcbbbbbbbbbbbcbbbbbbbbbbbcbbbbbbbbbbbcbbbbbbbbbbcbbbbbbbbbcb
    bbbbbcdbbbbbbbbbbcbbbbbbbbbbbbcbbbbbbbbbbbcbbbbbcbbbcccbbbbbbbbbbcbbbbbbbbbbbcbbbbbbbbbbbcbbbbbbbbbbbcbbbbbbbbbbbcbbbbbbbbbbbcbbbbbbbbbbbcbbbbbbbbbbcbbbbbbbbbcb
    bbbbbcdbbdbbbbbbbcbbbbbbbbbbbbcbbbbbbbbbbbcbbbbbbbbbbbcbbbbbbbbbbcbbbbbbbbbbbcbbbbbbbbbbbcbbbbbbbbbbbcbbbbbbbbbbbcbbbbbbbbbbbcbbbbbbbbbbbcbbbbbbbbbbcbbbbbbbbbbc
    bbbbbcdbbbbbbbbbbcbbbbbbbbbbbbcbbbbbbbbbbbcbbbbbcbbbbbcbbbbbbbbbbcbbbbbbbbbbbcbbbbbbbbbbbcbbbbbbbbbbbcbbbbbbbbbbbcbbbbbbbbbbbcbbbbbbbbbbbcbbbbbbbbbbcbbbbbbbbbbc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cbbbbbbbbbbbcbbbbbbbbbbbbcbbbbbbbbbbbcbbbbbbbbbbbcbbbbbbbbbbcbbbbbbbbbbbcbbbbbbbbbbbcbbbbbbbbbbbcbbbbbbbbbbbcbbbbbbbbbbbcbbbbbbbbbbbcbbbbbbbbbbcbbbbbbbbbbbcbbbb
    cbbbbbbbbbbbcbbbbbbbbbbbbcbbbbbbbbbbbcbbbbbbbbbbbcbbbbbbbbbbcbbbbbbbbbbbcbbbbbbbbbbbcbbbbbbbbbbbcbbbbbbbbbbbcbbbbbbbbbbbcbbbbbbbbbbbcbbbbbbbbbbcbbbbbbbbbbbcbbbb
    cbbbbbbbbbbbcbbbbbbbbbbbbcbbbbbbbbbbbcbbbbbbbbbbbcbbbbbbbbbbcbbbbbbbbbbbcbbbbbbbbbbbcbbbbbbbbbbbcbbbbbbbbbbbcbbbbbbbbbbbcbbbbbbbbbbbcbbbbbbbbbbcbbbbbbbbbbbcbbbb
    cbbbbbbbbbbbcbbbbbbbbbbbbcbbbbbbbbbbbcbbbbbbbbbbbcbbbbbbbbbbcbbbbbbbbbbbcbbbbbbbbbbbcbbbbbbbbbbbcbbbbbbbbbbbcbbbbbbbbbbbcbbbbbbbbbbbcbbbbbbbbbbcbbbbbbbbbbbcbbbb
    cbbbbbbbbbbbcbbbbbbbbbbbbcbbbbbbbbbbbcbbbbbbbbbbbcbbbbbbbbbbcbbbbbbbbbbbcbbbbbbbbbbbcbbbbbbbbbbbcbbbbbbbbbbbcbbbbbbbbbbbcbbbbbbbbbbbcbbbbbbbbbbcbbbbbbbbbbbcbbbb
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    bbbbcbbbbbbbbbbbcbbbbbbbbbbbbcbbbbbbbbbbbcbbbbbbbbbbbcbbbbbbbbbbcbbbbbbbbbbbcbbbbbbbbbbbcbbbbbbbbbbbcbbbbbbbbbbbcbbbbbbbbbbbcbbcccbbbbbbcbbbbbbbbbacbbbbbbbbbcbb
    bbbbcbbbbbbbbbbbcbbbbbbbbbbbbcbbbbbbbbbbbcbbbbbbbbbbbcbbbbbbbbbbcbbbbbdddddbcbbbbbbbbbbbcbbbbbbbbbbbcbbbbbbbbbbbcbbbbbbbbbbbcbbbbbcccabbcbbbbbbbbcacbbbbbbbbbcbb
    bbbbcbbbbbbbbbbbcbbbbbbbbbbbbcbbbbbbbbbbbcbbbbbbbbbbbcbbbbbbbbbbcbbbbbbbbbbbcbbbbbbbbbbbcbbbbbbbbbbbcbbbbbbbbbbbcbbbbbbbbbbbcbbbaabbbbbbcbbbcccbbcbcbbbbbbbbbcbb
    bbbbcbbbbbbbbbbbcbbbbbbbbbbbbcbbbbbbbbbbbcbbbbbbbbbbbcbbbbbbbbbbcbbbbbbbbbbbcbbbbbbbbbbbcbbbbbbbbbbbcbbbbbbbbbbbcbbbbbbbbbbbcbbbbbbbbbbbcbbbbabcbbbcbbbbbbbbbcbb
    bbbbcbbbbbbbbbbbcbbbbbbbbbbbbcbbbbbbbbbbbcbbbbbbbbbbbcbbbbbbbbbbcbbbbbbbbbbbcbbbbbbbbbbbcbbbbbbbbbbbcbbbbbbbbbbbcbbbbbbbbbbbcbbbbcbbbbbbcbbbbbbbbbbcbbbbbbbbbcbc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cbbbbbbbbbbbcbbbbbbbbbbbbcbbbbbbbbbbbcbbbbbbbbbbbcbbbbbbbbbbcbbbbbbbbbbbabbbbbbbbbbbcbbbbbbbbbbbcbbbbbbbbbbbcbbbbbbbbbbbcbbbbbbbbbbbcbbbbbbbbbbcbbbbbbbbbbbcbbbb
    cbbbbbbbbbbbcbbbbbbbbbbbbcbbbbbbbbbbbcbbbbbbbbbbbcbbbbbbbbbbcbbbbbbbbbbbabbbbbbbbbbbcbbbbbbbbbbbcbbbbbbbbbbbcbbbbbbbbbbbcbbbbbbbbbbbcbbbbbbbbbbcbbbbbbbbbbbcbbbb
    cbbbbbbbbbbbcbbbbbbbbbbbbcbbbbbbbbbbbcbbbbbbbbbbbcbbbbbbbbbbcbbbbbbbbaabcbbbbbbbbbbbcbbbbbbbbbbbcbbbbbbbbbbbcbbbbbbbbbbbcbbbbbbbbbbbcbbbbbbbbbbcbbbbbbbbbbbcbbbb
    cbbbbbbbbbbbcbbbbbbbbbbbbcbbbbbbbbbbbcbbbbbbbbbbbcbbbbbbbbbbcbbbbbbbbbbbcbbbbbbbbbbbcbbbbbbbbbbbcbbbbbbbbbbbcbbbbbbbbbbbcbbbbbbbbbbbcbbbbbbbbbbcbbbbbbbbbbbcbbbb
    cbbbbbbbbbbbcbaaaabbbbbbbcbbbbbbbbbbbcbbbbbbbbbbbcbbbbbbbbbbcbbbbbbbbbabcbbbbbbbbbbbcbbbbbbbbbbbcbbbbbbbbbbbcbbbbbbbbbbbcbbbbbbbbbbbcbbbbbbbbbbcbbbbbbbbbbbcbbbb
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    bbbbcbbbbbbbbbbbcbbbbbbbbbbbbcbbbbbbbbbbbcbbbbbbbbbbbcbbbbbbbbbbcbbbbbbbbbbbcbbbbbbbbbbbcbbbbbbbbbbbcbbbbbbbbbbbcbbbbbbbbbbbcbbbbbbbbbbbcbbbbbbbbbbcbbbbbbbbbcbb
    bbbbcbbbbbbbbbbbcbbbbbbbbbbbbcbbbbbbbbbbbcbbbbbbbbbbbcbbbbbbbbbbcbbbbbbbbbbbcbbbbbbbbbbbcbbbbbbbbbbbcbbbbbbbbbbbcbbbbbbbbbbbcbbbbbbbbbbbcbbbbbbbbbbcbbbbbbbbbcbb
    bbbbcbbbbbbbbbbbcbbbbbbbbbbbbcbbbbbbbbbbbcbbbbbbbbbbbcbbbbbbbbbbcbbbbbbbbbbbcbbbbbbbbbbbcbbbbbbbbbbbcbbbbbbbbbbbcbbbbbbbbbbbcbbbbbbbbbbbcbbbbbbbbbbcbbbbbbbbbcbb
    bbbbcbbbbbbbbbbbcbbbbbbbbbbbbcbbbbbbbbbbbcbbbbbbbbbbbcbbbbbbbbbbcbbbbbbbbbbbcbbbbbbbbbbbcbbbbbbbbbbbcbbbbbbbbbbbcbbbbbbbbbbbcbbbbbbbbbbbcbbbbbbbbbbcbbbbbbbbbcbb
    bbbbcbbbbbbbbbbbcbbbbbbbbbbbbcbbbbbbbbbbbcbbbbbbbbbbbcbbbbbbbbbbcbbbbbbbbbbbcbbbbbbbbbbbcbbbbbbbbbbbcbbbbbbbbbbbcbbbbbbbbbbbcbbbbbbbbbbbcbbbbbbbbbbcbbbbbbbbbcbb
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cbbbbbbbbbbbcbbbbbbbbbbbbcbbbbbbbbbbbcbbbbbbbbbbbcbbbbbbbbbbcbbbbbbbbbbbcbbbbbbbccbbcbbbbbbbbbbbcbbbbbbbbbbbcbbbbbbbbbbbcbbbbbbbbbbbcbbbbbbbbbbcbbbbbbbbbbbcbbbb
    cbbbbbbbbbbbcbbbbbbbbbbbbcbbbbbbbbbbbcbbbbbbbbbbbcbbbbbbbbbbcbbbbbbbbbbbccccbbbcbcbbcbbbbbbbbbbbcbbbbbbbbbbbcbbbbbbbbbbbcbbbbbbbbbbbcbbbbbbbbbbcbbbbbbbbbbbcbbbb
    cbbbbbbbbbbbcbbbbbbbbbbbbcbbbbbbbbbbbcbbbbbbbbbbbcbbbbbbbbbbcbbbbbbbbbbbcbbbcccbbbcbcbbbbbbbbbbbcbbbbbbbbbbbcbbbbbbbbbbbcbbbbbbbbbbbcbbbbbbbbbbcbbbbbbbbbbbcbbbb
    cbbbbbbbbbbbcbbbbbbbbbbbbcbbbbbbbbbbbcbbbbbbbbbbbcbbbbbbbbbbcbbbbbbbbbbbcbbbbbbbbbcbcbbbbbbbbbbbcbbbbbbbbbbbcbbbbbbbbbbbcbbbbbbbbbbbcbbbbbbbbbbcbbbbbbbbbbbcbbbb
    cbbbbbbbbbbbcbbbbbbbbbbbbcbbbbbbbbbbbcbbbbbbbbbbbcbbbbbbbbbbcbbbbbbbbbbbcbbbbbbbbbbbcbbbbbbbbbbbcbbbbbbbbbbbcbbbbbbbbbbbcbbbbbbbbbbbcbbbbbbbbbbcbbbbbbbbbbbcbbbb
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccb
    bbbbcbbbdddddbbbcbbbbbbbbbbbbcbbbbbbbbbbbcbbbbbbbbbbbcbbbbbbbbbbcbbbbbbbbbddcbbbbbbbbbbbcbbbbbbbbbbbcbbbbbbbbbbbcbbbbbbbbbbbcbbbbbbbbbbbcbbbbbbbbbbcbbbbbbbbbcbb
    bbbbcbddbbbbbbbbcbbbbbbbbbbbbcbbbbbbbbbbbcbbbbbbbbbbbcbbbbbbbbbbcbbbbbbbddbbcbbbbbbbbbbbcbbbbbbbbbbbcbbbbbbbbbbbcbbbbbbbbbbbcbbbbbbbbbbbcbbbbbbbbbbcbbbbdbbbbcbb
    bbbbcbbbbbbbbbbbcbbbbbbbbbbbbcbbbbbbbbbbbcbbbbbbbbbbbcbbbbbbbbbbcbbbbbddbbbbcbbbbbbbbbbbcbbbbbbbbbbbcbbbbbbbbbbbcbbbbbbbbbbbcbbbbbbbbbbbcbbbbbbbbbbcbbbbbbbbbcbb
    bbbbcbbbbbbbbbbbcbbbbbbbbbbbbcbbbbbbbbbbbcbbbbbbbbbbbcbbbbbbbbbbcbbbbdbbbbbbcbbbbbbbbbbbcbbbbbbbbbbbcbbbbbbbbbbbcbbbbbbbbbbbcbbbbbbbbbbbcbbbbbbbbbbcbbbdbbbbbcbb
    bbbbcbbbbbbbbbbbcbbbbbbbbbbbbcbbbbbbbbbbbcbbbbbbbbbbbcbbbbbbbbbbcbbbbbbbbbbbcbbbbbbbbbbbcbbbbbbbbbbbcbbbbbbbbbbbcbbbbbbbbbbbcbbbbbbbdbbbcbbbbbbbbbbcbbbbbbbbbcbb
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    bcbbbbbbbbbbbcbbbbbbbbbbbbcbbbbbbbbbbbcbbbbbbbbbbbcbbbbbbbbbbcbbbbbbbbbbbcbbbbbbbbbbbcbbbbbbbbbbbcbbbbbbbbbbbcbbbbbbbbbbbcbbbbbbbbbbbcbbbbbbbbbbcbbbbbbbbbbbcbcc
    bcbbbbbbbbbbbcbbbbbbbbbbbbcbbbbbbbbbbbcbbbbbbbbbbbcbbbbbbbbbbcbbbbbbbbbbbcbbbbbbbbbbbcbbbbbbbbbbbcbbbbbbbbbbbcbbbbbbbbbbbcbbbbbbbbbbbcbbbbbbbbbbcbbbbdbbbbbbcbbb
    bcbbbbbbbbbbbcbbbbbbbbbbbbcbbbbbbbbbbbcbbbbbbbbbbbcbbbbbbbbbbcbbbbbbbbbbbcbbbbbbbbbbbcbbbbbbbbbbbcbbbbbdbbbbbcbbbbbbbbbbbcbbbbbbbbbbbcbbbbbbbbbbcbbbbbddbbbbcbbb
    bcbbbbbbbbbbbcbbbbbbbbbbbbcbbbbbbbbbbbcbbbbbbbbbbbcbdbbbbbbbbcbbbbbbbbbbbcbbbbbbbbbbbcbbbbbbbbbbbcbbbbbbbbbbbcbbbbbbbbbbbcbbbbbbbbbbbcbbbdbbbbbbcbbbbbbbbbbbcbbb
    bcbbbbbbbbbbbcbbbbbbbbbbbbcbbbbbbbbbbbcbbbbbbbbbbbcbbddddddbbcbbbbbbbbbbbcbbbbbbbbbbbcbbbbbbbbbbbcbbbbbbbdbbbcbbbbbbbbbbbcbbbbbbbbbbbcbbbbbbdbbbcbbbbbbbbbbbcbbb
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    bbbbbcbbbbbbbbbbbcbbbbbbbbbbbbcbbbbbbbbbbbcbbbbbbbbbbbcbbbbbbbbbbcbbbbbbbbbbbcbbbbbbbbbabcbbbbbbbbbbbcbbbbbbbbbbbcbbbbbbbbbbbcbbbbbbbbbbbcbbbbbbbbbbcbbbbbbbbbcb
    bbbbbcbbbbbbbbbbbcbbbbbbbbbbbbcbbbbbbbbbbbcbbbbbbbbbbbcbbbbbbbbbbcbbbbbbbbbbbcbbbbbbbbbaacbbbbbbbbbbbcbbbbbbbbbbbcbbbbbbbbbbbcbbbbbbbbbbbcbbbbbbbbbbcbbbbbbbbbcb
    bbbbbcbbbbbbbbbbbcbbbbdbddddbbcbbbbbbbbbbbcbbbbbbbbbbbcbbbbbbbbbbcbbbbbbbbbbbcbbbbbbbbbbacbbbbbbbbbbbcbbbbbbbbbbbcbbbbbbbbbbbcbbbbbbbbbbbcbbbbbbbbbbcbbbbbbbbbcb
    bbbbbcbbbbbbbbbbbcbbbbbbbbbbbbcbbbbbbbbbbbcbbbbbbbbbbbcbbbbbbbbbbcbbbbbbbbbbbcbbbbbbbbbbacbbbbbbbbbbbcbbbbbbbbbbbcbbbbbbbbbbbcbbbbbbbbbbbcbbbbbbbbbbcbbbbbbbbbcb
    bbbbbcbbbbbbbbbbbcbbbbbbbbbbbbcbbbbbbbbbbbcbbbbbbbbbbbcbbbbbbbbbbcbbbbbbbbbbbcbbbbbbbbbbbcbbbbbbbbbbbcbbbbbbbbbbbcbbbbbbbbbbbcbbbbbbbbbbbcbbbbbbbbbbcbbbbbbbbbcb
`)
info.startCountdown(25)
game.setDialogCursor(img`
    . 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 .
    9 9 9 9 9 9 9 9 c f 9 9 9 9 9 f c 9
    9 9 9 9 9 9 9 9 f 1 f 9 9 9 f 1 f 9
    9 9 e e f 9 9 9 c 3 1 f f f 1 3 f 9
    9 f d d d f 9 9 f 1 1 d d d 1 1 c 9
    9 f d f e 9 9 f d 1 1 1 d 1 1 1 d f
    9 f d f 9 9 9 f 1 1 c 1 1 1 1 c 1 f
    9 e d d f e e c 1 1 1 c 1 1 c 1 1 c
    9 f d d 1 1 1 1 f 1 1 1 3 3 1 1 f 9
    9 f d 1 1 1 1 1 1 f f c f f f f 9 9
    9 f 1 1 1 d d 1 1 d d 1 f 9 9 9 9 9
    9 f 1 1 e f f f f f 1 1 f 9 9 9 9 9
    9 f d d f 9 9 9 9 9 1 1 f 9 9 9 9 9
    . 9 f f 9 9 9 9 9 9 f f 9 9 9 9 9 .
`)
game.splash("Fleeing Feline", "Help the cat escape! And watch out for the dog.")
//  Tilemap 
scene.setTileMap(img`
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    ...................6......................6.....................................
    ...................6......................6.....................................
    ...................6......................6.....................................
    .....ee...ee.......6.e..11..e......88888..6.......................cccccc........
    ..............33...6.e..11..e......88888..6..........77......................ff9
    ..............33..............33...88888.........77..........aaa.............ff9
    ...e5e522e5...33.......e5e5...33...88888.....................aaa.............ff9
    ...e5e522e5...33.......e5e5...33...88888.....................aaa.............ff9
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbdbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb44
`)
// mirror
scene.setTile(1, img`
    ................................
    ................................
    ................................
    ................................
    ................................
    ................................
    ................................
    ................................
    ................................
    ................................
    ................................
    ................................
    ................................
    ................................
    ................................
    ................................
    ................................
    ................................
    ................................
    ................................
    ................................
    ................................
    ................................
    ................................
    ................................
    ................................
    ................................
    ................................
    ................................
    ................................
    ................................
    ................................
`, true)
let mirror = sprites.create(img`
    eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    ee9999999999999999999999999999ee
    ee9991991999999999999999999999ee
    ee9919919999919999999999999999ee
    ee9199199999199999999999999999ee
    ee9991999991999999999999999999ee
    ee9919999919999999999999999999ee
    ee9999999199999999999999999999ee
    ee9999999999999999999999999999ee
    ee9999999999999999999999999999ee
    ee9999999999999999999999999999ee
    ee9999999999999999999999999999ee
    ee9999999999999999999999999999ee
    ee9999999999999999999999999999ee
    ee9999999999999999999999999999ee
    ee9999999999999999999999999999ee
    ee9999999999999999999999199999ee
    ee9999999999999999999991999999ee
    ee9999999999999999999919999999ee
    ee9999999999999999999199999999ee
    ee9999999999999999991999999999ee
    ee9999999999999999999999199999ee
    ee9999999999999999999991999999ee
    ee9999999999999999999919999999ee
    ee9999999999999999999199999999ee
    ee9999999999999999991999999999ee
    ee9999999999999999919999999999ee
    ee9999999999999999999999999999ee
    ee9999999999999999999999999999ee
    eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
`)
mirror.setPosition(400, 79)
// oven
scene.setTile(2, img`
    ................................
    ................................
    ................................
    ................................
    ................................
    ................................
    ................................
    ................................
    ................................
    ................................
    ................................
    ................................
    ................................
    ................................
    ................................
    ................................
    ................................
    ................................
    ................................
    ................................
    ................................
    ................................
    ................................
    ................................
    ................................
    ................................
    ................................
    ................................
    ................................
    ................................
    ................................
    ................................
`, true)
let oven = sprites.create(img`
    dddddddddddddddddddddddddddddddd
    d111111111111111111111111111111d
    d11bb11bb111ffffffff111bb11bb11d
    d11bb11bb111ffffffff111bb11bb11d
    d111111111111111111111111111111d
    dddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddd
    ddd222222222ddddddd2222222222ddd
    dddddddddddddddddddddddddddddddd
    d111111111111111111111111111111d
    d111111111111111111111111111111d
    d111111111111111111111111111111d
    d11cccccccccccccccccccccccccc11d
    d11cccccccccccccccccccccccccc11d
    d11ccffffffffffffffffffffffcc11d
    d11ccffffffffffffffffffffffcc11d
    d11ccff222222222222222222ffcc11d
    d11ccffffffffffffffffffffffcc11d
    d11ccffffffffffffffffffffffcc11d
    d11ccffffffffffffffffffffffcc11d
    d11ccff222222222222222222ffcc11d
    d11ccffffffffffffffffffffffcc11d
    d11ccffffffffffffffffffffffcc11d
    d11ccffffffffffffffffffffffcc11d
    d11ccff222222222222222222ffcc11d
    d11ccffffffffffffffffffffffcc11d
    d11ccffffffffffffffffffffffcc11d
    d11cccccccccccccccccccccccccc11d
    d11cccccccccccccccccccccccccc11d
    d111111111111111111111111111111d
    d111111111111111111111111111111d
    dddddddddddddddddddddddddddddddd
`, SpriteKind.Projectile)
oven.setPosition(128, 128)
scene.onHitTile(SpriteKind.Player, 2, function on_hit_oven(sprite: Sprite) {
    game.over(false)
})
// fridge
scene.setTile(3, img`
    ...cccccccccc...
    ..c1111111111c..
    .c111111111111c.
    .c111111111111c.
    .c111111111cc1c.
    .f1111111111c1f.
    .f1111111111c1f.
    f11111111111c11f
    f1111111111cc11f
    fc111111111111cf
    f1bbbbbbbbbbbb1f
    f11111111111111f
    f1111111111cc11f
    f11111111111c11f
    f11111111111c11f
    f11111111111c11f
    f11111111111c11f
    f11111111111c11f
    c1111111111c111f
    c11111111111111c
    c11111111111111c
    .cccccccccccccc.
    .fbbfbbbbbbfbbf.
    ..ff........ff..
`, true)
let fridge = sprites.create(img`
    dddddddddddddddddddddddddddddddd
    d111111111111111111111111111111d
    d111111111111111111111111111111d
    d1111111111111111111111111fff11d
    d1111111111111111111111111f1f11d
    d1111111111111111111111111f1f11d
    d1111111111111111111111111f1f11d
    d1111111122211111111111111f1f11d
    d1111111121211111111111111f1f11d
    d1111111122111111111111111f1f11d
    d1111111121211111111111111f1f11d
    d1111111122211111aaa111111f1f11d
    d1166611111111111a1a111111f1f11d
    d1161611111111111a11111111f1f11d
    d1166611111111111aaa111111f1f11d
    d1161611111111111111111111f1f11d
    d1111111111111111111111111f1f11d
    d1111111111111111111111111f1f11d
    d1111111111111111111111111fff11d
    d111111111111111111111111111111d
    dffffffffffffffffffffffffffffffd
    dddddddddddddddddddddddddddddddd
    d111111111111111111111111111111d
    d111111111111111111111111111111d
    d1111111111111111111111111fff11d
    d1111111111111111111111111f1f11d
    d1111411411111111111111111f1f11d
    d1111111111111111111111111f1f11d
    d1111411411111111111111111f1f11d
    d1111144111111111111111111f1f11d
    d1111111111111111111111111f1f11d
    d1111111111111111111111111f1f11d
    d1111111111111111111111111f1f11d
    d1111111111111111111111111f1f11d
    d1111111111111111111111111f1f11d
    d1111111111111111111111111f1f11d
    d1111111111111111111111111f1f11d
    d1111111111111111111111111f1f11d
    d1111111111111111111111111f1f11d
    d1111111111111111111111111f1f11d
    d1111111111111111111111111f1f11d
    d1111111111111111111111111f1f11d
    d1111111111111111111111111f1f11d
    d1111111111111111111111111f1f11d
    d1111111111111111111111111fff11d
    d111111111111111111111111111111d
    d111111111111111111111111111111d
    d111111111111111111111111111111d
    d111111111111111111111111111111d
    d111111111111111111111111111111d
    d111111111111111111111111111111d
    d111111111111111111111111111111d
    d111111111111111111111111111111d
    d111111111111111111111111111111d
    d111111111111111111111111111111d
    d111111111111111111111111111111d
    d111111111111111111111111111111d
    d111111111111111111111111111111d
    d111111111111111111111111111111d
    d111111111111111111111111111111d
    d111111111111111111111111111111d
    d111111111111111111111111111111d
    d111111111111111111111111111111d
    ffffffffffffffffffffffffffffffff
`)
fridge.setPosition(240, 112)
scene.setTile(4, img`
    4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4
    4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4
    4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4
    4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4
    4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4
    4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4
    4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4
    4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4
    4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4
    4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4
    4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4
    4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4
    4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4
    4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4
    4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4
    4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4
`, true)
// Cabinet
scene.setTile(5, img`
    f e e e e e e e e e e e e e e f
    f e e e e e e e e e e e e e e f
    f e e e e e e e e e e e e e e f
    f e e e e e e e e e e e e e e f
    f e e e e e e e e e e e e e e f
    f e e e e e e e e e e e e e e f
    f e e e e e e e e e e e e e e f
    f e e e e e e e e e e e e e e f
    f e e e e e e e e e e e e e e f
    f e e e e e e e e e e e e e e f
    f e e e e e e e e e e e e e e f
    f e e e e e e e e e e e e e e f
    f e e e e e e e e e e e e e e f
    f e e e e e e e e e e e e e e f
    f e e e e e e e e e e e e e e f
    f e e e e e e e e e e e e e e f
`, true)
scene.setTile(14, img`
    f e e e e e e e e e e e e e e f
    f e e e e e e e e e e e e e e f
    f e e e e e e e e e e e e e e f
    f e e e e e e e e e e e e e e f
    f e e e e e e e e e e e e e e f
    f e e e e e e e e e e e e e e f
    f e e e e e e e e e e e e e e f
    f e e e e e e e e e e e e e e f
    f e e e e e e e e e e e e e e f
    f e e e e e e e e e e e e e e f
    f e e e e e e e e e e e e e e f
    f e e e e e e e e e e e e e e f
    f e e e e e e e e e e e e e e f
    f e e e e e e e e e e e e e e f
    f e e e e e e e e e e e e e e f
    f e e e e e e e e e e e e e e f
`, true)
// room separation
scene.setTile(6, img`
    c a c c c c c c c a c c c c c c
    c a c c c c c c c a c c c c c c
    c a c c c c c c c a c c c c c c
    a a a a a a a a a a a a a a a a
    c c c c c a c c c c c c c a c c
    c c c c c a c c c c c c c a c c
    c c c c c a c c c c c c c a c c
    a a a a a a a a a a a a a a a a
    c a c c c c c c c a c c c c c c
    c a c c c c c c c a c c c c c c
    c a c c c c c c c a c c c c c c
    a a a a a a a a a a a a a a a a
    c c c c c a c c c c c c c a c c
    c c c c c a c c c c c c c a c c
    c c c c c a c c c c c c c a c c
    a a a a a a a a a a a a a a a a
`, true)
// library shelves
scene.setTile(7, img`
    . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . .
    . . 8 8 . . . 7 7 7 5 5 a a a .
    3 3 8 8 2 2 2 7 a 7 5 5 a a a .
    3 3 8 8 2 2 2 7 a 7 5 5 a a a .
    3 3 8 8 2 2 2 7 a 7 5 5 a a a .
    3 3 8 8 2 2 2 7 a 7 5 5 a a a .
    3 3 8 8 2 2 2 7 a 7 5 5 a a a .
    3 3 8 8 2 2 2 7 a 7 5 5 a a a .
    3 3 8 8 2 2 2 7 a 7 5 5 a a a .
    3 3 8 8 2 2 2 7 7 7 5 5 a a a .
    e e e e e e e e e e e e e e e e
    e e e e e e e e e e e e e e e e
    e e e e e e e e e e e e e e e e
`, true)
// Shower
scene.setTile(8, img`
    . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . .
`, true)
let shower = sprites.create(img`
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    fffdddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddff
    fffdddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddff
    fffdddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddff
    fffdddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddff
    fffdddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddff
    fffdddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddff
    fffddcccccccccccccddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddff
    fffddcccccccccccccddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddff
    fffddcccccccccccccddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddff
    fffddcccdddddddcccddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddff
    fffddcccdddddcccccddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddff
    fffddcccddddccccccccccddddddddddddddddddddddddddddddddddddddddddddddddddddddddff
    fffddcccddddccccccccccccddddddddddddddddddddddddddddddddddddddddddddddddddddddff
    fffddcccddddcccccaaaccccddddddddddddddddddddddddddddddddddddddddddddddddddddddff
    fffddcccddddccaaaaaaaaccddddddddddddddddddddddddddddddddddddddddddddddddddddddff
    fffddcccddddccaaaaaaaaccddddddddddddddddddddddddddddddddddddddddddddddddddddddff
    fffdccccdddddcaaaaaaaaccddddddddddddddddddddddddddddddddddddddddddddddddddddddff
    fffdccccddd9dddcaaaaaacdddddddddddddddddddddddddddddddddddddddddddddddddddddddff
    fffdccccddd9ddddd9ddd9999dddddddddddddddd99dddddddddddddddddddddddddddddddddddff
    fffdcccddddd9dddddddd9dddddddddddddd999999ddddddddddddddddddddddddddddddddddddff
    fffdcccddddd9dddddddd9ddddddddddddddddddddddd9ddddddddddddddddddddddddddddddddff
    fffccccddddd99dddddddd9dddddddddddddddddddddd9ddddddddddddddddddddddddddddddddff
    fffccccdddddd9ddd9dddd99ddddddddddddddddddddd9ddddddddddddddddddd99dddddddddddff
    fffccccddddddddddd9dddddddddddddddddddddddddd9ddddddddddddd9dddddd99ddddddddddff
    fffccffffddddddddd9dddddddddddddddddddddddddd9ddddddddddddd9ddddddd9ddddddddddff
    fffcfffffdddddddddd9ddddddddddddddddddddddddd9ddddddddddddd9ddddddd9ddddddddddff
    fffcfffffddddddddddd9ddddddddddddddd9dddddddd9ddddddddddddd9ddddddddddddddddddff
    fffcfffffddddddddddd99dddddddddddddd99dddddd9dddddddddddddd9ddddddddddddddddddff
    fffcfffffdddddddddddd9ddddddddddddddd9dddddd9dddddddddddddddddddddddddddddddddff
    ffccfffffddddd9ddddddd9ddddddddddddddd9dddddddddddddddddddddddddddddddddddddddff
    ffccfffffddddd9ddddddd99dddddddddddddd9dddddddddddddddddddddddddddddddddddddddff
    ffccffffdddddd9d9dddddd9dd99dddddddddd9ddddddddddddddddddd9dddddddddddddddddddff
    ffcccccddddddd9dddddddddddd999dddddddd9ddddddddddddddddddd9dddddddddddddddddddff
    ffcccccddddddd9dddddddddddddd9dddddddddddddddddddddddddddd9dddddddddddddddddddff
    ffcccccddddddd9ddddddddddddd9999ddddddddddddddddddddddddd99dddddddddddddddddddff
    ffcccccddddddd9d9dddddddddddddddddddddddddddddddddddddddd9ddddddd9ddddddddddddff
    ffcccccddddddd9d9dddddddddddddddddddddddddddddddddddddddd9ddddddd9ddddddddddddff
    ffcccccddddddddd9ddddddddddddddddddddddddddddddddddddddd9dddddddd9ddddddddddddff
    ffcccccddddddddddddd9dddddddddddddddddddddddddddddddddddddddddddd9ddddddddddddff
    ffcccccddddddddddddd9ddddddddddddddddd99ddddddddddddddddddddddddd9ddddddddddddff
    ffcccccdddddddddddddd9dddddddddddddddd9d999ddddddddddddddddddddd9dddddddddddddff
    ffccccccddddddddddddd9dddddddddddddddd9dddd99ddddddddddddddddddd9dddddddddddddff
    ffccccccdddddddddddddd99dddddddddddddd9ddddd999dddddddddddddddd9ddddddddddddddff
    ffccccccddddddddd9dddddd999ddddddddddd9dddddddddddddddddddddddddddddddddddddddff
    fffcccccddddddddd99ddd9dddd999dddddddd9dddddddddddddddddddddddddddddddddddddddff
    fffcccccdddddddddd9dddd9dddddd99ddddddddddddddddd9ddddddddddddddddddddddddddddff
    fffddddddddddddddd9dddd9ddddddddddddddddddddddd999ddddddddddddddddddddddddddddff
    fffddddddddddddddd9dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddff
    fffddddddddddddddd9ddddddddddddddddddddddddddddddddddddddddd9dddddddddddddddddff
    fffddddddddddddddd9dddddddd9dddddddddd9dddddddddddddddddddd99dddddddddddddddddff
    fffddddddddddddddd9ddddddddd9ddddddddd9ddddddddddddddddddd99ddddddddddddddddddff
    fffddddddddddddddddddddddddd99dddddddd9dddddddddddddddddddddddddddddddddddddddff
    fffddddddddddddddddddddddddddd9ddddddd9dddd9ddddddddddddddddddddddddddddddddddff
    fffddddddddddddddddddddddddddd9ddddddd9d9999dddddddddddddddd9dddddddddddddddddff
    fffddddddddddddddddddddddddddd9ddddd9999dddd9dddddddddddddddd99dddddddddddddddff
    fffdddddddddddddddddddddddddddd9ddddddddddddd9dddddddddddddddd9dddddddddddddddff
    fffddddddddddddddddddddddddddddddddddddddddddd99ddddddddddddddddddddddddddddddff
    fffddddddddddddddddd9d9999dddddddddddddddddddddd9ddddddddddddddddd9dddddddddddff
    fffdddddddddddddddddd9ddddddddddddddddddddddddddd99ddddddddddddddd99ddddddddddff
    fffdddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd99dddddddddff
    fffdddddddddddddddddddddddddddddddd9ddddddddddddddddddddddddddddddddddddddddddff
    fffdddddddddddddddddddddddddddddddd999ddddddddddddddddddddddddddddddddddddddddff
    fffdddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddff
    fffdddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddff
    fffdddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddff
    fffdddddddddddddddddddddddddddddddddddddddddddddddddddd9999999ddddddddddddddddff
    fffdddddddddddddddddddddddddddddddddddddddddddddddddddddddddd99dddddddddddddddff
    fffdddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddff
    fffdddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddff
    fffdddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddff
    fffdddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
`)
shower.setPosition(600, 104)
// Toilet
scene.setTile(3, img`
    . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . .
`, true)
let toilet = sprites.create(img`
    ..11111111111111111111111111111.
    ..11111111111111111111111111111.
    4441111111111111111111111111111.
    4441111111111111111111111111111.
    4441111111111111111111111111111.
    4411111111111111111111111111111.
    4411111111111111111111111111111.
    4411111111111111111111111111111.
    ..11111111111111111111111111111.
    ..11111111111111111111111111111.
    ..dddd1111111111111111111111111.
    ......ddddddddddddddddddddd.....
    ......d11111111111111111111.....
    ......d11111111111111111111.....
    ......d11111111111111111111.....
    ......d11111111111111111111.....
    ......d11111111111111111111.....
    ......dd1111111111111111111.....
    ......dd1111111111111111111.....
    ......ddd111111111111111111.....
    ......ddd111111111111111111.....
    ......ddddd1111111111111111.....
    ......ddddddd11111111111111.....
    ......dddddddddddddddddddd......
    .444444444444444444444444444444.
    .444444444444444444444444444444.
    .444444444444444444444444444444.
    .444444444444444444444444444444.
    ...dddddddddddddddddddddddddd...
    ...11111111111111111111111111...
    ...11111111111111111111111111...
    ...d1111111111111111111111111...
    ....d11111111111111111111111....
    .....d111111111111111111111.....
    ......d1111111111111111111......
    .......d11111111111111111.......
    .........dddddddddddddd.........
    .........dddddddddddddd.........
    .........dddddddddddddd.........
    ......d1111111111111111111......
    ......d1111111111111111111......
    ......d1111111111111111111......
    .....dd11111111111111111111.....
    .....dd11111111111111111111.....
    ....ddddd1111111111111111111....
    ....dddddd111111111111111111....
    ....dddddd111111111111111111....
    ....dddddddddddddddddddd1111....
`)
toilet.setPosition(495, 120)
// bookshelf
scene.setTile(10, img`
    e e e e e e e e e e e e e e e e
    e e e e e e e e e e e e e e e e
    e e e e e e e e e e e e e e e e
    e e e e e e e e e e e e e e e e
    e e e e e 7 7 7 e e e e e 2 2 2
    5 5 5 e e 7 6 7 e e e 4 4 2 2 2
    5 4 5 a a 7 6 7 9 9 9 4 4 2 2 2
    5 4 5 a a 7 6 7 9 8 9 4 4 2 2 2
    5 4 5 a a 7 6 7 9 8 9 4 4 2 2 2
    5 4 5 a a 7 6 7 9 8 9 4 4 2 2 2
    5 4 5 a a 7 6 7 9 8 9 4 4 2 2 2
    5 4 5 a a 7 6 7 9 8 9 4 4 2 2 2
    5 5 5 a a 7 7 7 9 9 9 4 4 2 2 2
    f f f f f f f f f f f f f f f f
    e e e e e e e e e e e e e e e e
    f f f f f f f f f f f f f f f f
`, true)
scene.setTile(11, img`
    c a c c c c c c c a c c c c c c
    c a c c c c c c c a c c c c c c
    c a c c c c c c c a c c c c c c
    a a a a a a a a a a a a a a a a
    c c c c c a c c c c c c c a c c
    c c c c c a c c c c c c c a c c
    c c c c c a c c c c c c c a c c
    a a a a a a a a a a a a a a a a
    c a c c c c c c c a c c c c c c
    c a c c c c c c c a c c c c c c
    c a c c c c c c c a c c c c c c
    a a a a a a a a a a a a a a a a
    c c c c c a c c c c c c c a c c
    c c c c c a c c c c c c c a c c
    c c c c c a c c c c c c c a c c
    a a a a a a a a a a a a a a a a
`, true)
scene.setTile(12, img`
    c a c c c c c c c a c c c c c c
    c a c c c c c c c a c c c c c c
    c a c c c c c c c a c c c c c c
    a a a a a a a a a a a a a a a a
    c c c c c a c c c c c c c a c c
    c c c c c a c c c c c c c a c c
    c c c c c a c c c c c c c a c c
    a a a a a a a a a a a a a a a a
    c a c c c c c c c a c c c c c c
    c a c c c c c c c a c c c c c c
    c a c c c c c c c a c c c c c c
    a a a a a a a a a a a a a a a a
    c c c c c a c c c c c c c a c c
    c c c c c a c c c c c c c a c c
    c c c c c a c c c c c c c a c c
    a a a a a a a a a a a a a a a a
`, true)
scene.setTile(13, img`
    c a c c c c c c c a c c c c c c
    c a c c c c c c c a c c c c c c
    c a c c c c c c c a c c c c c c
    a a a a a a a a a a a a a a a a
    c c c c c a c c c c c c c a c c
    c c c c c a c c c c c c c a c c
    c c c c c a c c c c c c c a c c
    a a a a a a a a a a a a a a a a
    c a c c c c c c c a c c c c c c
    c a c c c c c c c a c c c c c c
    c a c c c c c c c a c c c c c c
    a a a a a a a a a a a a a a a a
    c c c c c a c c c c c c c a c c
    c c c c c a c c c c c c c a c c
    c c c c c a c c c c c c c a c c
    a a a a a a a a a a a a a a a a
`, true)
// Door
scene.setTile(15, img`
    eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
`)
scene.setTile(9, img`
    f f 9 9 9 9 9 9 9 9 9 9 9 9 9 9
    f f 9 9 9 9 9 9 9 9 9 9 9 9 9 9
    f f 9 9 9 9 9 9 9 9 9 9 9 9 9 9
    f f 9 9 9 9 9 9 9 9 9 9 9 9 9 9
    f f 9 9 9 9 9 9 9 9 9 9 9 9 9 9
    f f 9 9 9 9 9 9 9 9 9 9 9 9 9 9
    f f 9 9 9 9 9 9 9 9 9 9 9 9 9 9
    f f 9 9 9 9 9 9 9 9 9 9 9 9 9 9
    f f 9 9 9 9 9 9 9 9 9 9 9 9 9 9
    f f 9 9 9 9 9 9 9 9 9 9 9 9 9 9
    f f 9 9 9 9 9 9 9 9 9 9 9 9 9 9
    f f 9 9 9 9 9 9 9 9 9 9 9 9 9 9
    f f 9 9 9 9 9 9 9 9 9 9 9 9 9 9
    f f 9 9 9 9 9 9 9 9 9 9 9 9 9 9
    f f 9 9 9 9 9 9 9 9 9 9 9 9 9 9
    f f 9 9 9 9 9 9 9 9 9 9 9 9 9 9
`)
scene.setTile(4, img`
    c a c c c c c c c a c c c c c c
    c a c c c c c c c a c c c c c c
    c a c c c c c c c a c c c c c c
    a a a a a a a a a a a a a a a a
    c c c c c a c c c c c c c a c c
    c c c c c a c c c c c c c a c c
    c c c c c a c c c c c c c a c c
    a a a a a a a a a a a a a a a a
    c a c c c c c c c a c c c c c c
    c a c c c c c c c a c c c c c c
    c a c c c c c c c a c c c c c c
    a a a a a a a a a a a a a a a a
    c c c c c a c c c c c c c a c c
    c c c c c a c c c c c c c a c c
    c c c c c a c c c c c c c a c c
    a a a a a a a a a a a a a a a a
`, true)
// player images
let cat = sprites.create(img`
    . . . . . . . . . . . . . . . . . .
    . . . . . . . . c f . . . . . f c .
    . . . . . . . . f 1 f . . . f 1 f .
    . . e e f . . . c 3 1 f f f 1 3 f .
    . f d d d f . . f 1 1 d d d 1 1 c .
    . f d f e . . f d 1 1 1 d 1 1 1 d f
    . f d f . . . f 1 1 c 1 1 1 1 c 1 f
    . e d d f e e c 1 1 1 c 1 1 c 1 1 c
    . f d d 1 1 1 1 f 1 1 1 3 3 1 1 f .
    . f d 1 1 1 1 1 1 f f c f f f f . .
    . f 1 1 1 d d 1 1 d d 1 f . . . . .
    . f 1 1 e f f f f f 1 1 f . . . . .
    . f d d f . . . . . 1 1 f . . . . .
    . . f f . . . . . . f f . . . . . .
`, SpriteKind.Player)
let cat_default = img`
    . . . . . . . . . . . . . . . .
    . . . . . . c f . . . . . f c .
    . . . . . . f 1 f . . . f 1 f .
    . . f f . . c 3 1 f f f 1 3 f .
    . f d d f . f 1 1 d d d 1 1 c .
    f d d f . f d 1 1 1 d 1 1 1 d f
    f d f . . f 1 1 c 1 1 1 1 c 1 f
    f d d f f c 1 1 1 c 1 1 c 1 1 c
    f d d 1 1 1 f 1 1 1 3 3 1 1 f .
    f d 1 1 d d f f f c f f f f . .
    f 1 1 1 d 1 f 1 1 1 d d 1 f . .
    f 1 d f f f f 1 1 f f 1 1 f . .
    f 1 d f . . f d d . . d 1 f . .
    . f f . . . . f f . . f f . . .
`
let cat_right = img`
    . . . . . . . . . . . . . . . . . .
    . . . . . . . . c f . . . . . f c .
    . . . . . . . . f 1 f . . . f 1 f .
    . . e e f . . . c 3 1 f f f 1 3 f .
    . f d d d f . . f 1 1 d d d 1 1 c .
    . f d f e . . f d 1 1 1 d 1 1 1 d f
    . f d f . . . f 1 1 c 1 1 1 1 c 1 f
    . e d d f e e c 1 1 1 c 1 1 c 1 1 c
    . f d d 1 1 1 1 f 1 1 1 3 3 1 1 f .
    . f d 1 1 1 1 1 1 f f c f f f f . .
    . f 1 1 1 d d 1 1 d d 1 f . . . . .
    . f 1 1 e f f f f f 1 1 f . . . . .
    . f d d f . . . . . 1 1 f . . . . .
    . . f f . . . . . . f f . . . . . .
`
let cat_left = img`
    . . . . . . . . . . . . . . . . . .
    . c f . . . . . f c . . . . . . . .
    . f 1 f . . . f 1 f . . . . . . . .
    . f 3 1 f f f 1 3 f . . . f e e . .
    . c 1 1 d d d 1 1 c . . f d d d f .
    f d 1 1 1 d 1 1 1 d f . . e f d f .
    f 1 c 1 1 1 1 c 1 1 f . . . f d f .
    f 1 1 c 1 1 c 1 1 1 c e e f d d e .
    . f 1 1 3 3 1 1 1 f 1 1 1 1 d d f .
    . . f f f f f f f 1 1 1 1 1 1 d f .
    . . . . . f 1 d d 1 1 d d 1 1 1 f .
    . . . . . f 1 1 1 f f f f e 1 1 f .
    . . . . . f 1 1 e . . . . f d d f .
    . . . . . . f f . . . . . . f f . .
`
let cat_left_jump = img`
    . c f . . . . . f c . . . . . . . . .
    . f 1 f . . . f 1 f . . . . . . . . .
    . f 3 1 f f f 1 3 f . . . . . . f f .
    . c 1 1 d d d 1 1 c . . . . . c d d c
    f d 1 1 1 d 1 1 1 d f . . . f d d f .
    f 1 c 1 1 1 1 c 1 1 f . . . f d f . .
    c 1 1 c 1 1 c 1 1 1 c f f f d d f . .
    . f 1 1 3 3 1 1 d f d d 1 1 1 d d f .
    . . c f f f f f f 1 1 1 1 1 1 1 d f .
    . . . c d d 1 1 1 1 1 1 1 d 1 1 1 f .
    . . f 1 1 1 f 1 d c f f c c 1 1 1 1 f
    . f d 1 f f . f f . . . . . f f 1 d d
    . f 1 c . . . . . . . . . . . . f f d
    . . f . . . . . . . . . . . . . . . c
`
let cat_right_jump = img`
    . . . . . . . . . c f . . . . . f c .
    . . . . . . . . . f 1 f . . . f 1 f .
    . f f . . . . . . c 3 1 f f f 1 3 f .
    c d d c . . . . . f 1 1 d d d 1 1 c .
    . f d d f . . . f d 1 1 1 d 1 1 1 d f
    . . f d f . . . f 1 1 c 1 1 1 1 c 1 f
    . . f d d f f f c 1 1 1 c 1 1 c 1 1 c
    . f d d 1 1 1 d d f 1 1 1 3 3 1 1 f .
    . f d 1 1 1 1 1 1 1 f f c f f f c . .
    . f 1 1 1 d 1 1 1 1 1 1 1 d d c . . .
    f 1 1 1 1 c c f f c d 1 f 1 1 1 f . .
    d d 1 f f . . . . . f f . f f 1 d f .
    d f f . . . . . . . . . . . . c d f .
    c . . . . . . . . . . . . . . . f . .
`
//  player setup
game.onUpdate(function on_update3() {
    if (controller.dx() < 0 && controller.A.isPressed()) {
        cat.setImage(cat_left_jump)
    } else if (controller.dx() > 0 && controller.A.isPressed()) {
        cat.setImage(cat_right_jump)
    } else if (controller.dx() < 0) {
        cat.setImage(cat_left)
    } else if (controller.dx() > 0) {
        cat.setImage(cat_right)
    } else {
        cat.setImage(cat_default)
    }
    
})
scene.cameraFollowSprite(cat)
cat.ay = 300
tiles.placeOnTile(cat, tiles.getTileLocation(1, 8))
// Player controls
controller.moveSprite(cat, 100, 0)
let double_jump = true
controller.A.onEvent(ControllerButtonEvent.Pressed, function jump() {
    
    if (double_jump) {
        cat.vy = -140
        double_jump = cat.isHittingTile(CollisionDirection.Bottom)
    }
    
})
game.onUpdate(function on_update() {
    
    if (cat.isHittingTile(CollisionDirection.Bottom)) {
        double_jump = true
    }
    
})
//  powerup one
let powerup1 = sprites.create(img`
    . . . 5 5 . . . 5 . . . . . . .
    5 . . . 5 . . . 5 5 . . . . 5 5
    5 5 . . 5 . . . . 5 . . . 5 5 .
    . . . . 4 4 4 4 . . . . 5 5 . .
    . . 4 4 4 4 4 4 4 . . . . . . .
    . e 4 4 4 4 4 4 4 4 . . . . . .
    e 4 4 4 4 4 4 4 4 4 4 . . 1 . .
    e 4 4 4 4 4 4 4 4 4 1 1 1 1 . 5
    e 4 4 4 4 4 4 4 4 4 4 d d 1 . 5
    . e 4 4 4 4 4 4 4 4 e . . . . .
    . . e e e e e e e e . . . 5 5 .
    . 5 5 . . 5 . . . . 5 . . . . 5
    5 5 . . . 5 5 . . . 5 5 . . . .
    5 . . . . . 5 . . . . 5 5 . . .
    . . . . . . 5 . . . . . 5 . . .
    . . . . . . . . . . . . . . . .
`, SpriteKind.Food)
tiles.placeOnTile(powerup1, tiles.getTileLocation(10, 6))
sprites.onOverlap(SpriteKind.Player, SpriteKind.Food, function on_overlap(sprite: Sprite, otherSprite: Sprite) {
    otherSprite.destroy(effects.coolRadial, 100)
    controller.moveSprite(cat, 150, 0)
    timer.debounce("action", 5000, function on_debounce() {
        controller.moveSprite(cat, 100, 0)
    })
})
// dog images
let dog = sprites.create(img`
    . . . . . . 4 4 4 . . . . 4 4 4 . .
    . . . . . 4 5 5 5 e . . e 5 5 5 4 .
    . . . . 4 5 5 5 5 5 4 4 5 5 5 5 5 4
    . . . . 4 5 5 4 4 5 5 5 5 4 4 5 5 4
    . . e e 4 5 4 4 5 5 5 5 5 5 4 4 5 4
    . 4 5 5 e 4 e 5 5 5 5 5 5 5 5 e 4 .
    4 5 5 e . . e 5 5 f 5 5 5 f 5 e . .
    e 5 e . . . 4 5 5 5 5 f 5 5 5 e . .
    e 5 e 4 e e 4 5 5 5 f 5 f 5 5 4 . .
    e 5 5 5 5 5 5 e 5 5 5 5 5 5 e . . .
    e 5 5 5 5 5 5 5 e e e 4 4 e . . . .
    e 5 5 5 5 5 5 5 5 5 5 e . . . . . .
    e 5 5 5 e e e e 5 5 5 e . . . . . .
    e 5 5 e . . . . e 5 5 e . . . . . .
    e 5 5 e . . . . e 5 5 e . . . . . .
    e e e e . . . . e e e e . . . . . .
`)
let dog_right = img`
    . . . . . . 4 4 4 . . . . 4 4 4 . .
    . . . . . 4 5 5 5 e . . e 5 5 5 4 .
    . . . . 4 5 5 5 5 5 4 4 5 5 5 5 5 4
    . . . . 4 5 5 4 4 5 5 5 5 4 4 5 5 4
    . . e e 4 5 4 4 5 5 5 5 5 5 4 4 5 4
    . 4 5 5 e 4 e 5 5 5 5 5 5 5 5 e 4 .
    4 5 5 e . . e 5 5 f 5 5 5 f 5 e . .
    e 5 e . . . 4 5 5 5 5 f 5 5 5 e . .
    e 5 e 4 e e 4 5 5 5 f 5 f 5 5 4 . .
    e 5 5 5 5 5 5 e 5 5 5 5 5 5 e . . .
    e 5 5 5 5 5 5 5 e e e 4 4 e . . . .
    e 5 5 5 5 5 5 5 5 5 5 e . . . . . .
    e 5 5 5 e e e e 5 5 5 e . . . . . .
    e 5 5 e . . . . e 5 5 e . . . . . .
    e 5 5 e . . . . e 5 5 e . . . . . .
    e e e e . . . . e e e e . . . . . .
`
let dog_left = img`
    . . 4 4 4 . . . . 4 4 4 . . . . . .
    . 4 5 5 5 e . . e 5 5 5 4 . . . . .
    4 5 5 5 5 5 4 4 5 5 5 5 5 4 . . . .
    4 5 5 4 4 5 5 5 5 4 4 5 5 4 . . . .
    4 5 4 4 5 5 5 5 5 5 4 4 5 4 e e . .
    . 4 e 5 5 5 5 5 5 5 5 e 4 e 5 5 4 .
    . . e 5 f 5 5 5 f 5 5 e . . e 5 5 4
    . . e 5 5 5 f 5 5 5 5 4 . . . e 5 e
    . . 4 5 5 f 5 f 5 5 5 4 e e 4 e 5 e
    . . . e 5 5 5 5 5 5 e 5 5 5 5 5 5 e
    . . . . e 4 4 e e e 5 5 5 5 5 5 5 e
    . . . . . . e 5 5 5 5 5 5 5 5 5 5 e
    . . . . . . e 5 5 5 e e e e 5 5 5 e
    . . . . . . e 5 5 e . . . . e 5 5 e
    . . . . . . e 5 5 e . . . . e 5 5 e
    . . . . . . e e e e . . . . e e e e
`
// dog setup
game.onUpdate(function on_update2() {
    if (dog.vx > 0) {
        dog.setImage(dog_right)
    }
    
    if (dog.vx < 0) {
        dog.setImage(dog_left)
    }
    
})
tiles.placeOnTile(dog, tiles.getTileLocation(49, 8))
dog.setKind(SpriteKind.Enemy)
dog.ay = 800
//  oven setup
scene.onHitTile(SpriteKind.Player, 2, function on_hit_tile(sprite: Sprite) {
    game.over()
})
scene.onHitTile(SpriteKind.Player, 13, function on_hit_tile2(cat: Sprite) {
    dog.follow(cat, 85)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function on_overlap2(sprite: Sprite, otherSprite: Sprite) {
    game.over()
})
//  win/lose effect
scene.onHitTile(SpriteKind.Player, 4, function on_outside(sprite: Sprite) {
    game.over(true, effects.smiles)
})
