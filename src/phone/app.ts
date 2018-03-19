import { PhoneService } from './phone.service';

enum system {
  windows = "Windows",
  linux = "Linux",
  osx = "OSX",
}

enum gameState {
  start = '1',
  pause = '2',
  stop = '3',
  end = '4'
}

enum version {
  first = 1.0,
  second = 1.1,
  third = 2.0,
  last = 5.1
}


async function bootstrap() {

  try {

    const service: PhoneService = new PhoneService();
    //const result = await service.toService(phoneExample);

    // const string = capitalize("ivana");
    //const finder = await service.inStock("a1");
    console.log(createOs(system[1], version.first));

    //console.log(result);
    //console.log(string);

  } catch (err) {
    console.log(err);
  }

}

bootstrap();

function createOs(system: string, version: number): string {
  return system.toString() + " " + version.toString();
}

function capitalize(text: string): string {
  const result = text.toLowerCase();
  return result[0].toUpperCase() + result.slice(1, result.length);
}


