function (context, args) { // target: #s.some.script
  const ez = ['open', 'release', 'unlock']

  let params = {}
  let result =args.target.call(params)

  if (result.includes('EZ_21')) {


    for (let i = 0; i < ez.length; i++) {
      // set the ez_21 param
      params.ez_21 = ez[i]
      // Check to see if the lock was cracked, if it was, break the loop
      if (!result.includes('is not the correct')) {
        break
      }
    }
    if (result.includes('Connection terminated')) {
      // lock was hacked, spit out the params the worked
      return params;
    }
  }
}