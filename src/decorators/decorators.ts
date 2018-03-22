export function Roles(role: string) {

  console.log("nesto bezze", role, process.env.roles);
  console.log("f(): evaluated");
  return function (target, propertyKey: string, descriptor: PropertyDescriptor) {

    if (role === process.env.roles) {
      console.log("f(): called");
    }
    else {
      throw new Error("err");
    }

  }
}

export function format(formatString: string) {

}
