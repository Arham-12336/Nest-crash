import { Controller, Get, Render } from '@nestjs/common';
import { AppService } from './app.service';


interface IlocationListDto{
  locations: string[];
}

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  @Render('list.hbs')
  listlocations(): IlocationListDto {
    return {
      locations:[
        'location:1',
        'location:2',
        'location:3',
        'location:4',
        'location:5'
      ],
    };
  }
}
