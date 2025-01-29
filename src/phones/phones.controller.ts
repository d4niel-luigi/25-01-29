import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { PhonesService } from './phones.service';
import { CreatePhoneDto } from './dto/create-phone.dto';
import { UpdatePhoneDto } from './dto/update-phone.dto';
import { ApiResponse, ApiParam, ApiBadRequestResponse } from '@nestjs/swagger';
import { Phone } from './entities/phone.entity';

@Controller('phones')
export class PhonesController {
  constructor(private readonly phonesService: PhonesService) {}

  @Post()
  create(@Body() createPhoneDto: CreatePhoneDto) {
    return this.phonesService.create(createPhoneDto);
  }

  @Get()
  findAll() {
    return this.phonesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.phonesService.findOne(+id);
  }

  /**
   * Modifies the details of an existing phone
   * 
   * @param id The unique ID of the phone
   * @param updatePhoneDto 
   * @returns JSON response
   */


  @Patch(':id')
  @ApiParam({
    name:'id',
    type:'int',
    description: 'The unique ID of the phone!'
  })
  @ApiResponse({ status:200, description: 'The modified data of the phone'})
  @ApiBadRequestResponse({ description: 'The supplied data was invalid'})
  update(@Param('id') id: string, @Body() updatePhoneDto: UpdatePhoneDto) {
    return this.phonesService.update(+id, updatePhoneDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.phonesService.remove(+id);
  }
}
